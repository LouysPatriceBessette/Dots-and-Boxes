import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  padding: 40px 20px;
`

export const PlayersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 60px;
`

export const Player = styled.div`
  display: flex;
  flex-direction: column;
`

export const PlayerScore = styled.div<{color: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 2em;
  border-radius: 6px;
  corner-shape: squircle;
`

export const CurrentTurn = styled.div`
  font-size: 3em;
  text-align: center;
  & div{
    font-weight: bold;
    font-size: 2em;
    transform: translateY(-80px);
  }
`

export const GameGridContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const GameOver = styled.div`
  color: red;
  font-size: 4em;
  font-weight: 600;
  display: flex;
  justify-content: center;
  width: 100%;
`