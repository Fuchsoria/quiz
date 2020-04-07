import { createActions } from 'redux-actions';

export const { setQuizzes, clearQuizzes } = createActions({
  SET_QUIZZES: (quizzes) => quizzes,
  CLEAR_QUIZZES: () => null
});
