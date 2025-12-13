import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useIsLoaded } from '../store/selectors';
import { setIsLoaded } from '../store/actions';

import { AppLoaderStyled as AppLoader } from './AppLoader.styled';

export const Loader = () => {
  const dispatch=useDispatch();
  const isLoaded = useIsLoaded()
  const loaderDelay = Number(process.env.NEXT_PUBLIC_LOADER_DELAY) ?? 5000

  useEffect(() => {
    if(!isLoaded){
      setTimeout(() => {
        dispatch(setIsLoaded(true));
      }, loaderDelay)
    }
  }, [dispatch, isLoaded, loaderDelay])

  return !isLoaded ?
    <AppLoader><div className="loader"></div></AppLoader> :
    <></>
}