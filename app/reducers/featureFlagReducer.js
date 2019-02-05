import FeatureFlags from '../feature-flags';
import { UPDATE_FEATURE_FLAGS } from '../constants';

export default function featureFlagReducer(state = FeatureFlags.getInitialState(), action) {
  switch (action.type) {
    case UPDATE_FEATURE_FLAGS:
      return action.payload;
    default:
      return state;
  }
}
