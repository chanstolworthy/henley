import { SET_USER } from '../constants';

const user = (state = null, action) => {
  let update = state;
  switch (action.type) {
    case SET_USER:
      update = {
        ...action.payload,
      };
      break;
  }
  return update;
};

export default user;
