import { handleActions } from 'redux-actions';
import { setLatestAnswer, clearLatestAnswer } from './answersActions';

const initialState = { latestAnswer: '', isCorrect: null };

export default handleActions(
  {
    [setLatestAnswer]: (store, action) => {
      const { id, isCorrect } = action.payload;

      return { ...store, latestAnswer: id, isCorrect };
    },
    [clearLatestAnswer]: (store, action) => {
      return { ...store, latestAnswer: '', isCorrect: null };
    },
  },
  initialState
);
