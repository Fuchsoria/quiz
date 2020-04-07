import { createActions } from 'redux-actions';

export const { setProfile } = createActions({
  SET_PROFILE: profile => profile
});
