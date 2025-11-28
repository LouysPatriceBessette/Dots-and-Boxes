'use client'
import { useState } from "react";


import { GameGrid } from "./components/game-grid";
import {
  PageContainer,
  PlayersHeader,
  Player,
  PlayerScore,
  CurrentTurn,
  GameGridContainer
} from "./components/page-elements.styled";

export default function Home() {

  const [currentPlayer, setCurrentPlayer] = useState(1);

  const [fencedByP1, setFencedByP1] = useState<number[]>([])
  const [fencedByP2, setFencedByP2] = useState<number[]>([])

  return (
    <PageContainer>
      <PlayersHeader>
        <Player>
          Player 1
          <PlayerScore color='green'>
            {fencedByP1.length}
          </PlayerScore>
        </Player>

        <CurrentTurn player={1}>
          Current Turn
          <div>
            { currentPlayer === 1 ? <span>&larr;</span> : <span>&rarr;</span> }
          </div>
        </CurrentTurn>
        
        <Player>
          Player 2
          <PlayerScore color='blue'>
            {fencedByP2.length}
          </PlayerScore>
        </Player>
      </PlayersHeader>

      <GameGridContainer >
        <GameGrid
          size={8}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          fencedByP1={fencedByP1}
          fencedByP2={fencedByP2}
          setFencedByP1={setFencedByP1}
          setFencedByP2={setFencedByP2}
        />
      </GameGridContainer>
    </PageContainer>
  );
}
