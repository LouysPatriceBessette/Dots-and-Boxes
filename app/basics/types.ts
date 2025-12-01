import { Socket } from "socket.io-client";

export type INITIAL_STATE_TYPE = {
  chat: {
    messages: string[],
  },
  game: {
    gameId: number,
    size: number,
    player1Name: string,
    player2Name: string,
    currentPlayer: number,
    gameover: false,
    usedFences: string[],
    fencedByP1: string[],
    fencedByP2: string[],
  },
  mouse: {
    origin: number,
    canConnectWith: string[],
  },
  socket: {
    iamPlayer: number,
    instance: Socket | null,
    localId: string,
    remoteId: string,
  },
};