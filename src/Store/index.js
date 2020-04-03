import { createStore, combineReducers } from 'redux';
import quizzesReducer from './quizzesReducer';
import userReducer from './userReducer';

const reducer = combineReducers({ quizzes: quizzesReducer, profile: userReducer });

export function initStore(preloadedState = undefined) {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return { store };
}
