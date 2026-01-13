'use client'
import { useEffect } from "react";
import { StrictMode } from "react";
import { Provider } from 'react-redux';
import { store } from "./store/store";

import { Game } from "./pages/game";
import { SocketListen } from "./socket";
import { ChakraProvider } from "./components/Chakra/ChakraProvider/ChakraProvider";

export default function Home() {

  // FOUC handling
  useEffect(() => {
    setTimeout(() => {
      const body = document.querySelector('body')
      if(body){
        body.classList.add('loaded')
      }
    }, 600)
  }, [])
  return (
    <StrictMode>
      <Provider store={store}>
        <ChakraProvider>
          <Game />
          <SocketListen />        
        </ChakraProvider>
      </Provider>
    </StrictMode>
  );
}
