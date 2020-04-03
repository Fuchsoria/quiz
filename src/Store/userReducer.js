import { handleActions } from 'redux-actions';
import { setProfile } from './userActions';

const initialState = [];

export default handleActions(
  {
    [setProfile]: (state, action) => {
      return action.payload;
    }
  },
  initialState
);
