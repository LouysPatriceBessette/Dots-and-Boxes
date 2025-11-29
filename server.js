import { createServer } from 'http';
import { Server } from 'socket.io';
import next from 'next';
import { parse } from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const tryParseJson = (string) => {
  let json
  try{
    json = JSON.parse(string)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch(error){
    json = null
  }

  return json
}

// While we do not have a DB yet...
const games = []

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    handle(req, res); // Let Next.js handle regular requests
  });

  const io = new Server(httpServer, {
    cors: {
      origin: '*', // Adjust for your client-side origin in production
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('message', (msg) => {

      // Attempt to parse the message
      const parsed = tryParseJson(msg)

      // Messages to server
      if(parsed && parsed.to === 'server') {
        console.log('Message to server', msg)

        // CREATE GAME
        if(parsed.action === 'create-game'){
          const game = {
            id: games.length,
            players: [parsed.socketId],
          }
          games.push(game)
          console.log(`player1 created game ${game.id}`, game)

          io.to(parsed.socketId).emit('message', JSON.stringify({
            from: 'server',
            action: 'created-game',
            gameId: game.id,
          }))
        }

        // JOIN GAME
        if(parsed.action === 'join-game' && parsed.gameId && parsed.socketId){
          const game = games.find((game) => game.id === parseInt(parsed.gameId))

          if(game){

            const player1 = game.players[0]
            const player2 = parsed.socketId

            game.players.push(player2)
            console.log(`player2 joined game ${game.id}`, game)

            // Confirm join to player2
            io.to(player2).emit('message', JSON.stringify({
              from: 'server',
              action: 'joined-game',
              gameId: game.id,
              player1: player1,
            }))

            // Notify player1
            io.to(player1).emit('message', JSON.stringify({
              from: 'server',
              action: 'player-joined',
              player2: player2,
            }))
          } else {
            console.log(`player2 failed to join game ${parsed.gameId}`)
            io.to(parsed.socketId).emit('message', JSON.stringify({
              from: 'server',
              action: 'join-failed',
            }))
          }
        }
      }

      // Message to a specific player
      else if(parsed && parsed.to === 'player' && parsed.playerId) {
        console.log('Message to player', msg)
        io.to(parsed.playerId).emit('message', msg)
      }

      // Message to players of a specific game
      else if(parsed && parsed.to === 'players' && parsed.gameId) {
        const game = games.find((game) => game.id === parsed.gameId)
        console.log('Message to player', msg)
        for(const player of game.players){
          io.to(player).emit('message', msg)
        }
      }
      
      // Messages to anyone ??
      else {
        console.log('Message anyone?:', msg);
        // io.emit('message', msg);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  httpServer.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
});