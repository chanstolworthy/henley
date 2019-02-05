import { combineReducers } from 'redux';
import { router5Reducer } from 'redux-router5';
import { reducer as notifications } from 'redux-notifications';
import { reducer as formReducer } from 'redux-form';
import featureFlagReducer from './featureFlagReducer';
import data from './data.js';
import pending from './pending.js';
import user from './user';
import enums from './enums';
import { LOG_OUT } from '../constants';

const appReducer = combineReducers({
  data,
  pending,
  router: router5Reducer,
  form: formReducer,
  user,
  enums,
  notifications,
  featureFlags: featureFlagReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
