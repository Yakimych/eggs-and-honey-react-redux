// @flow
// import type { Reducer } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, reduxLogger)
  );
}