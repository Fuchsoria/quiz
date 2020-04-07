import { createActions } from 'redux-actions';

export const { setLatestAnswer, clearLatestAnswer } = createActions({
  SET_LATEST_ANSWER: (id, isCorrect) => ({ id, isCorrect }),
  CLEAR_LATEST_ANSWER: () => null,
});
