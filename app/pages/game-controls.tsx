import { Button } from "./game-controls.styled";
import {
  // setSocketInstance,
} from '../store/actions';
import {
  useSocketInstance,
  useSocketLocalId
} from "../store/selectors";


export const GameControls = () => {
  const socket = useSocketInstance()
  const socketId = useSocketLocalId()

  const createGame = () => {
    const request = {
      to: 'server',
      action: 'create-game',
      socketId: socketId,
    }
    socket.emit('message', JSON.stringify(request))
  }

  const joinGame = () => {

    const gameId = prompt('Enter game id')
    if(gameId && !isNaN(parseInt(gameId))) {

      const request = {
        to: 'server',
        action: 'join-game',
        socketId: socketId,
        gameId: gameId
      }
      socket.emit('message', JSON.stringify(request))
    } else {
      alert('Invalid game id')
    }
  }

  return (<>
    <div>
      <Button onClick={() => localStorage.clear()}>
        Clear localStorage
      </Button>

      <Button
        onClick={createGame}
      >
        Create Game
      </Button>

      <Button
        onClick={joinGame}
      >
        Join Game
      </Button>
    </div>
  </>
  )
}
