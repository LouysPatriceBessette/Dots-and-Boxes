import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import {
  setSocketInstance,
  setSocketLocalId,
  // setSocketRemoteId,
  setChatMessage,
  toggleCurrentPlayer,
  setUsedFences
} from '../store/actions';
import { Socket } from 'socket.io-client';

export const socketKill = (socket: Socket) => {
  socket.disconnect();
}

export const sendMessage = (socket: Socket, messageInput: string, setMessageInput: React.Dispatch<React.SetStateAction<string>>) => {
  console.log('sendMessage', socket && messageInput)
  if (socket && messageInput) {
    socket.emit('message', messageInput);
    setMessageInput('');
  }
};

export const SocketListen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const socket = io();
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      dispatch(setSocketInstance(socket))
      dispatch(setSocketLocalId(socket.id ?? ''))
      localStorage.setItem('socketId', socket.id ?? '')
    });
  
    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
  
    socket.on('message', (msg) => {
      console.log('Message received:', msg);
  
      let command
      try{
        command = JSON.parse(msg)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch(error){
        // Nothing to do...
      }
  
      if(command){
        console.log('command received', command)

        if(command.from === 'server'){
          switch(command.action){

            // {from: "server", "action":"create-game", "message":"Hello from the server!"}
            case 'create-game':
              // dispatch(setChatMessage(command.message))
              break;
          }
        }

        if(command.from !== 'player'){
          switch(command.action){
    
            // {from: "player", "action":"toggle-player"}
            case 'toggle-player':
              dispatch(toggleCurrentPlayer())
              break;
              
            // {from: "player", "action":"move", "move":"V-2"}
            case 'move':
              console.log('Dispatching move', command.move)
              dispatch(setUsedFences(command.move))
              break;
          }
        }
      }else{
        // Display chat message
        dispatch(setChatMessage(msg));
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return <div></div>
}