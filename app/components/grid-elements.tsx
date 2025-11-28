import React from "react";
import { GridStyled, SquareStyled, DotStyled, VlineStyled, HlineStyled } from "./grid-elements.styled";

export const Grid = GridStyled

export const Square = ({
  identifier,
  usedFences,
  rowSize,
  currentPlayer,
  fencedByP1,
  fencedByP2,
  setFencedByP1,
  setFencedByP2,
}: {
  identifier: number,
  usedFences: string[],
  rowSize: number,
  currentPlayer: number,
  fencedByP1: number[],
  fencedByP2: number[],
  setFencedByP1: React.Dispatch<React.SetStateAction<number[]>>,
  setFencedByP2: React.Dispatch<React.SetStateAction<number[]>>,
}) => {

  const isFenced = (
    usedFences.includes(`H-${identifier}`) &&
    usedFences.includes(`V-${identifier}`) &&
    usedFences.includes(`V-${identifier + 1}`) &&
    usedFences.includes(`H-${identifier + rowSize}`)
  )
  

  const wasFencedByP1 = fencedByP1.includes(identifier)
  const wasFencedByP2 = fencedByP2.includes(identifier)

  const wasFencedBy = wasFencedByP1 ? 1 : wasFencedByP2 ? 2 : 0
  if(isFenced && !wasFencedByP1 && !wasFencedByP2) {
    if(currentPlayer === 2) { // runs after render... So players are reversed
      setFencedByP1(prev => {
        const state = [...prev, identifier]

        return Array.from(new Set(state))
      })
    } else {
      setFencedByP2(prev => {
        const state = [...prev, identifier]

        return Array.from(new Set(state))
      })
    }
  }

  return (
    <SquareStyled isFenced={isFenced} wasFencedBy={wasFencedBy}/>
  );
}

export const Dot = ({
  identifier,
  origin,
  setOrigin,
  setCanConnectWith,
  rowSize,
  canConnectWith,
  setUsedFences,
  usedFences,
  currentPlayer,
  setCurrentPlayer,
}:
  {
    identifier: number,
    origin: number,
    setOrigin: React.Dispatch<React.SetStateAction<number>>,
    setCanConnectWith: React.Dispatch<React.SetStateAction<number[]>>,
    rowSize: number
    canConnectWith: number[]
    setUsedFences: React.Dispatch<React.SetStateAction<string[]>>
    usedFences: string[],
    currentPlayer: number,
    setCurrentPlayer: React.Dispatch<React.SetStateAction<number>>,
  }) => {

  const upId = identifier - rowSize
  const rightId = identifier + 1
  const downId = identifier + rowSize
  const leftId = identifier - 1

  let up = upId > 0 ? upId : null
  let right = rightId <= Math.pow(rowSize, 2) && rightId % rowSize !== 1 ? rightId : null
  let down = downId <= Math.pow(rowSize, 2) ? downId : null
  let left = leftId > 0 && leftId % rowSize !== 0 ? leftId : null
  
  // Check the usedFences
  if(up && usedFences.includes(`V-${up}`)) up = null
  if(right && usedFences.includes(`H-${identifier}`)) right = null
  if(down && usedFences.includes(`V-${identifier}`)) down = null
  if(left && usedFences.includes(`H-${left}`)) left = null

  const friends = [up, right, down, left]

  const resetTurn = () => {
    setOrigin(-1)
    setCanConnectWith([])
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
  }
  const dotClickHandler = () => {
    if(canConnectWith.length === 0 && origin === -1) {
      setOrigin(identifier)
      setCanConnectWith(friends.filter((friend) => friend !== null))
      return
    }

    if(origin === identifier) {
      setOrigin(-1)
      setCanConnectWith([])
      return
    }

    if(canConnectWith.includes(identifier)) {
      console.log(`Gotcha! ${identifier}`)

      // Left
      if(origin - 1 === identifier) {
        setUsedFences(prev => [...prev, `H-${identifier}`])
        resetTurn()
        return
      }

      // Right
      if(origin + 1 === identifier) {
        setUsedFences(prev => [...prev, `H-${origin}`])
        resetTurn()
        return
      }

      // Up
      if(origin - rowSize === identifier) {
        setUsedFences(prev => [...prev, `V-${identifier}`])
        resetTurn()
        return
      }

      // Down
      if(origin + rowSize === identifier) {
        setUsedFences(prev => [...prev, `V-${origin}`])
        resetTurn()
        return
      }

      
    }
  }

  return (
    <DotStyled
      onClick={dotClickHandler}
      isOrigin={origin === identifier}
      isFriend={canConnectWith.includes(identifier)}
      origin={origin}
    />
  );
}

export const Vline = ({identifier, usedFences}: {identifier: number, usedFences: string[]}) => {
  const isUsed = usedFences.includes(`V-${identifier}`)
  
  return (
    <VlineStyled isUsed={isUsed} />
  );
}

export const Hline = ({identifier, usedFences}: {identifier: number, usedFences: string[]}) => {
  const isUsed = usedFences.includes(`H-${identifier}`)
  
  return (
    <HlineStyled isUsed={isUsed} />
  );
}