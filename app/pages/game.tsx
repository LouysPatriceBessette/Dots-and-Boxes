import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import {
  // setGameSize,
  setPlayer1Name,
  setGameId,
  setGameover,
} from "../store/actions";
import {
  useSize,
  usePlayer1Name,
  usePlayer2Name,
  useGameId,
  useGameover,
  useCurrentPlayer,
  useIamPlayer,
  useFencedByP1,
  useFencedByP2,
} from "../store/selectors";

import { GameControls } from "../components/game-controls";
import { GameGrid } from "../components/game-grid";
import {
  PageContainer,
  PlayersHeader,
  Player,
  PlayerNameContainer,
  PlayerOnlineIndicator,
  PlayerScore,
  CurrentTurn,
  GameGridContainer,
  GameOver,
} from "../components/page-elements.styled";

export const Game = () => {

  const dispatch = useDispatch()

  const currentPlayer = useCurrentPlayer()

  useEffect(() => {
    const storedGameId = localStorage.getItem('gameId')
    const player1Name = localStorage.getItem('player1Name')

    if(player1Name) {
      dispatch(setPlayer1Name(player1Name))
    }
    if(storedGameId) {
      dispatch(setGameId(storedGameId))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // This will com from a user selection
  const size = useSize()
  const iamPlayer = useIamPlayer()
  const player1Name = usePlayer1Name()
  const player2Name = usePlayer2Name()
  const gameId = useGameId()
  const finalCount = Math.pow(size -1, 2)

  const fencedByP1 = useFencedByP1()
  const fencedByP2 = useFencedByP2()
  const gameover = useGameover()

  if(fencedByP1.length + fencedByP2.length === finalCount) {
    setTimeout(() => dispatch(setGameover(true)), 100)
  }

  return (
    <PageContainer>
      <GameControls/>
      <PlayersHeader>
        <Player>
          <PlayerNameContainer>
            <PlayerOnlineIndicator $online={iamPlayer === 1} /> {player1Name}
            </PlayerNameContainer>
          <PlayerScore color='green'>
            {fencedByP1.length}
          </PlayerScore>
        </Player>

        <CurrentTurn $visible={!gameover || gameId === -1}>
          { currentPlayer === 1 ? <span>&larr;</span> : <span>&rarr;</span> }
        </CurrentTurn>

        <Player>
          <PlayerNameContainer>
            <PlayerOnlineIndicator $online={iamPlayer === 2} /> {player2Name}
            </PlayerNameContainer>
          <PlayerScore color='blue'>
            {fencedByP2.length}
          </PlayerScore>
        </Player>
      </PlayersHeader>

      <GameGridContainer >
        <GameGrid />
      </GameGridContainer>

      {gameover && <GameOver>Game Over</GameOver>}
    </PageContainer>
  );
}
