import { SET_ENUM } from '../constants';
import patch from '../utils/patch';

const initialState = {
  states: [],
  countries: [],
  employmentStatus: [],
  employmentType: [],
  ethnicity: [],
  gender: [],
  jobCategory: [],
  maritalStatus: [],
  organizationSize: [],
  organizationType: [],
  payFrequency: [],
  payOption: [],
  position: [],
  shirtSize: [],
};

const enums = (state = initialState, action) => {
  let set = {};
  switch (action.type) {
    case SET_ENUM:
      set = patch(state, action.payload);
      break;
  }
  return { ...state, ...set };
};

export default enums;
