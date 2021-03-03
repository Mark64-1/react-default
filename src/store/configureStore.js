import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/index.js'
import promiseMiddleware from './middleware/promiseMiddleware.js';

export default function(initialState) {
  const enhancer = compose(applyMiddleware(promiseMiddleware));
  return createStore(rootReducer, initialState, enhancer);
}