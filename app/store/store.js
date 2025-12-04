import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';

const dev = process.env.NODE_ENV !== 'production';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers =  dev ?
  compose(applyMiddleware(...middleWares)) :
  compose(applyMiddleware(...[]));

export const store = createStore(rootReducer, undefined, composedEnhancers);