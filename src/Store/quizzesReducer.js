import { handleActions } from 'redux-actions';
import { setQuizzes, clearQuizzes } from './quizzesActions';

const initialState = [];

export default handleActions(
  {
    [setQuizzes]: (state, action) => {
      return action.payload;
    },
    [clearQuizzes]: (state, action) => {
      return action.payload;
    }
  },
  initialState
);
