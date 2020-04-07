import { createActions } from 'redux-actions';

export const { setProfile, addDoneQuiz, addFailure } = createActions({
  SET_PROFILE: (profile) => profile,
  ADD_DONE_QUIZ: (id) => ({ id }),
  ADD_FAILURE: (category) => ({ category }),
});
