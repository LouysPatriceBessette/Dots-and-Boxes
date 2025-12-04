import { Socket } from "socket.io-client";

export type INITIAL_STATE_TYPE = {
  chat: {
    messages: string[],
  },
  game: {
    gameId: number,
    size: number,
    nameOfPlayer1: string,
    nameOfPlayer2: string,
    iamPlayer: number,
    currentPlayer: number,
    gameover: false,
    usedFences: string[],
    usedFencesP1: string[],
    usedFencesP2: string[],
    fencedByP1: string[],
    fencedByP2: string[],
  },
  mouse: {
    origin: number,
    canConnectWith: string[],
  },
  socket: {
    instance: Socket | null,
    localSocketId: string,
    remoteIsOnline: boolean,
  },
};