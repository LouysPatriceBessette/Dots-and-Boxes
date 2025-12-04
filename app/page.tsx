'use client'

import { Provider } from 'react-redux';
import { store } from "./store/store";
import { Game } from "./pages/game";
import { SocketListen } from "./socket";
import { Chat } from "./components/chat";
import { CharkraProvider } from "./components/Chakra/ChakraProvider/ChakraProvider";

export default function Home() {
  return (
    
    <Provider store={store}>
      <CharkraProvider>
        <Game />
        <SocketListen/>
        <Chat/>
      </CharkraProvider>
    </Provider>
  );
}
