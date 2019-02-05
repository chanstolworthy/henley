import { UPDATE_DATA } from '../constants';
import patch from '../utils/patch';

const data = (state = {}, action) => {
  let update = {};
  switch (action.type) {
    case UPDATE_DATA:
      update = action.replace ? action.payload : patch(state, action.payload);
      break;
  }
  return { ...state, ...update };
};

export default data;
