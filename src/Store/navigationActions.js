import { createActions } from 'redux-actions';

export const { setQuizCategories, setCurrentCategory } = createActions({
  SET_QUIZ_CATEGORIES: (categories) => categories,
  SET_CURRENT_CATEGORY: (category) => category,
});
