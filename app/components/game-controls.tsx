import { Button } from "./game-controls.styled";
import {
  setGameId,
  setNameOfPlayer1,
  setNameOfPlayer2,
} from '../store/actions';
import {
  useSocketInstance,
  useSocketLocalId,
  usePlayer1Name,
  usePlayer2Name,
  useGameId,
  useSocketRemoteIsOnline,
} from "../store/selectors";
import { useDispatch } from "react-redux";
import { SOCKET_ACTIONS } from "../basics/constants";


export const GameControls = () => {
  const socket = useSocketInstance()
  const socketId = useSocketLocalId()
  const player1Name = usePlayer1Name()
  const player2Name = usePlayer2Name()
  const gameId = useGameId()
  const remoteIsOnline = useSocketRemoteIsOnline()

  const mySocketId = useSocketLocalId()

  const dispatch = useDispatch()

  const createGame = () => {
    const myName = localStorage.getItem('myName')
    let nameToUse
    if(!myName) {
      let promptAnswer
      if(player1Name === 'Player 1') {
        promptAnswer = prompt('Enter your name')
        if(!promptAnswer) {
          alert('Name is required to create a game')
          return
        }
        nameToUse = promptAnswer
        dispatch(setNameOfPlayer1(promptAnswer))
        dispatch(setNameOfPlayer2('Player 2'))

        localStorage.setItem('myName', nameToUse)
        localStorage.setItem('player1Name', nameToUse)
        localStorage.removeItem('player2Name')
      }
    } else {
      nameToUse = myName
      dispatch(setNameOfPlayer1(myName))
    }

    const request = {
      from: 'player',
      to: 'server',
      action: SOCKET_ACTIONS.CREATE_GAME,
      socketId: socketId,
      player1Name: nameToUse,
    }
    socket.emit('message', JSON.stringify(request))
  }

  const joinGame = () => {
    const myName = localStorage.getItem('myName')
    let nameToUse
    if(!myName) {
      let promptAnswer1
      if(player2Name === 'Player 2') {
        promptAnswer1 = prompt('Enter your name')
        if(!promptAnswer1) {
          alert('Name is required to join a game')
          return
        }
        nameToUse = promptAnswer1
        dispatch(setNameOfPlayer1('Player 1'))
        dispatch(setNameOfPlayer2(promptAnswer1))

        localStorage.setItem('myName', nameToUse)
        localStorage.removeItem('player1Name')
        localStorage.setItem('player2Name', nameToUse)
      }
    } else {
      nameToUse = myName
      dispatch(setNameOfPlayer2(myName))
    }

    const promptAnswer2 = prompt('Enter game id')
    const newGameId = promptAnswer2 && parseInt(promptAnswer2)

    if(newGameId && !isNaN(newGameId) && newGameId > 0) {
      const request = {
        from: 'player',
        to: 'server',
        action: SOCKET_ACTIONS.JOIN_GAME,
        socketId: socketId,
        gameId: newGameId,
        player2Name: nameToUse,
      }
      dispatch(setGameId(newGameId))
      socket.emit('message', JSON.stringify(request))
    } else if(promptAnswer2 !== null) {
      alert('Invalid game id')
    }
  }

  const leaveGame = () => {
    const request = {
        from: 'player',
        to: 'server',
        action: SOCKET_ACTIONS.LEAVE_GAME,
        socketId: socketId,
        gameId: gameId,
      }
      socket.emit('message', JSON.stringify(request))
  }

  const destroyGame = () => {
    const request = {
        from: 'player',
        to: 'server',
        action: SOCKET_ACTIONS.DESTROY_GAME,
        socketId: socketId,
        gameId: gameId,
      }
      socket.emit('message', JSON.stringify(request))
  }

  const gameIdString = gameId.toString().slice(0,3) + ' ' + gameId.toString().slice(3,6)

  return (<>
    <div>
      <Button onClick={() => {
        localStorage.clear()
        localStorage.removeItem('gameId')
        localStorage.removeItem('socketId')
        window.location.reload()
      }}>
        Clear localStorage
      </Button>
    </div>

    
    <div>
      {gameId === -1  &&
      <Button
        onClick={createGame}
      >
        Create Game
      </Button>}

      {gameId !== -1 && remoteIsOnline &&
      <Button
        onClick={leaveGame}
      >
        Leave Game
      </Button>}

      {gameId !== -1 && !remoteIsOnline &&
      <Button
        onClick={destroyGame}
      >
        Destroy Game
      </Button>}

      {gameId === -1 ? <Button
        onClick={joinGame}
      >
        Join Game
      </Button> : <></>}
    </div>
    <div>
      My Socket Id: {mySocketId}
    </div>
    <div>
      Game ID: {gameIdString}
    </div>
  </>
  )
}
