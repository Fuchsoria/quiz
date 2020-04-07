import { createStore, combineReducers } from 'redux';
import quizzesReducer from './quizzesReducer';
import userReducer from './userReducer';
import navigationReducer from './navigationReducer';
import answersReducer from './answersReducer';

const reducer = combineReducers({
  quizzes: quizzesReducer,
  profile: userReducer,
  quizNavigation: navigationReducer,
  answers: answersReducer
});

export function initStore(preloadedState = undefined) {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return { store };
}
