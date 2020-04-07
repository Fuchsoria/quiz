import { handleActions } from 'redux-actions';
import { setProfile, addDoneQuiz, addFailure } from './userActions';

const initialState = { name: '', quizzesDone: 0, doneIds: [], failures: {} };

export default handleActions(
  {
    [setProfile]: (state, action) => {
      return action.payload;
    },
    [addDoneQuiz]: (state, action) => {
      const { id } = action.payload;

      return { ...state, quizzesDone: ++state.quizzesDone, doneIds: [...state.doneIds, id] };
    },
    [addFailure]: (state, action) => {
      const { category } = action.payload;
      const failuresCopy = { ...state.failures };

      if (!failuresCopy[category]) {
        failuresCopy[category] = 1;
      } else {
        failuresCopy[category] += 1;
      }

      return { ...state, failures: failuresCopy };
    },
  },
  initialState
);
