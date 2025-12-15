import { useEffect } from 'react'
import { useIsLoaded } from '../store/selectors';
import { AppLoaderStyled as AppLoader } from './AppLoader.styled';
import { TourMain } from '../tour/index.types';

interface Loader extends Omit<TourMain, 'tourActive' | 'setControlsEnabledButtonForTour' | 'chatDrawerOpen'>{
  setTourActive: React.Dispatch<React.SetStateAction<boolean>>,
}
export const Loader = (props: Loader) => {

  const EDITING_STEPS = true
  const isLoaded = useIsLoaded()

  const addedStyle = window.document.createElement('style');
  addedStyle.innerHTML = `
    [data-scope="dialog"]{
      opacity: 0;
    }
  `;

  const removedStyle = window.document.createElement('style');
  removedStyle.innerHTML = `
    [data-scope="dialog"]{
      opacity: 1;
    }
  `;

  useEffect(() => {
    if(!isLoaded){
      window.document.head.appendChild(addedStyle);
    } else {
      window.document.head.appendChild(removedStyle);
    }
  },[isLoaded, addedStyle, removedStyle])

  useEffect(() => {
    if(!!!isLoaded){
      const {
        setTourActive,

        setControlsDrawerOpen,
        setMore,

        setCreateGameDialogOpen,
        setJoinGameDialogOpen,
        setGameoverDialogOpen,

        setChatDrawerOpen,
      } = props

      // This is a bit hacky.
      // We are using existing game states to gater the tour elements rendered positions (used by the arrow).
      // This loop runs only once, on page load, while showing the nice animated loader.

      // Setter execution order
      const setters = [
        {f: setTourActive, s: true},

        {f: setControlsDrawerOpen, s: true},
        
        {f: setCreateGameDialogOpen, s: true},
        {f: setCreateGameDialogOpen, s: false},

        {f: setJoinGameDialogOpen, s: true},
        {f: setJoinGameDialogOpen, s: false}, 

        {f: setMore, s: true},
        {f: setMore, s: false},
        {f: setControlsDrawerOpen, s: false},

        {f: setGameoverDialogOpen, s: true},
        {f: setGameoverDialogOpen, s: false},
        
        {f: setChatDrawerOpen, s: true},
        {f: setChatDrawerOpen, s: false},

        {f: setTourActive, s: false},
      ]

      // Setters names for console.log
      const names = [
        'setTourActive',

        'setControlsDrawerOpen',

        'setCreateGameDialogOpen',
        'setCreateGameDialogOpen',

        'setJoinGameDialogOpen',
        'setJoinGameDialogOpen',

        'setMore',
        'setMore',
        'setControlsDrawerOpen',

        'setGameoverDialogOpen',
        'setGameoverDialogOpen',

        'setChatDrawerOpen',
        'setChatDrawerOpen',

        'setTourActive',
      ]

      if(EDITING_STEPS){
        console.clear()
      }

      // Setters execution loop
      let time = 0
      setters.forEach((S,I) => {
        const delay = parseInt(I.toString()) * (S.s ? 800 : 800)

        time += delay

        setTimeout(() => {

          if(EDITING_STEPS){
            console.log(time, '==============================================================', S.s ? "Open" : "close", names[parseInt(I.toString())])
          }

          S.f(S.s)

        }, delay)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isLoaded ? <></> : <AppLoader><div className="loader"></div></AppLoader>
}