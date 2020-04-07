import { handleActions } from 'redux-actions';
import { setQuizCategories, setCurrentCategory } from './navigationActions';

const initialState = { categories: [], current: '' };

export default handleActions(
  {
    [setQuizCategories]: (store, action) => {
      return { ...store, categories: action.payload };
    },
    [setCurrentCategory]: (store, action) => {
      return { ...store, current: action.payload };
    },
  },
  initialState
);
