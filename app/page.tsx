'use client'

import { Provider } from 'react-redux';
import { store } from "./store/store";

import { Loader } from './_loading/Loader';
import { Game } from "./pages/game";
import { SocketListen } from "./socket";
import { ChakraProvider } from "./components/Chakra/ChakraProvider/ChakraProvider";

export default function Home() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Loader />
        <Game />
        <SocketListen />        
      </ChakraProvider>
    </Provider>
  );
}
