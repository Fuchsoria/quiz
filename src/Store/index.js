import { createStore, combineReducers } from 'redux';
import quizzesReducer from './quizzesReducer';
import userReducer from './userReducer';
import navigationReducer from './navigationReducer';

const reducer = combineReducers({
  quizzes: quizzesReducer,
  profile: userReducer,
  quizNavigation: navigationReducer,
});

export function initStore(preloadedState = undefined) {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return { store };
}
