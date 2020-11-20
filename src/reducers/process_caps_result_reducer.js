import { PROCESS_CAPS_RESULT } from "../actions/types";

const initialState = {
  result: {},
};

const process_caps_result = (state = initialState, action) => {
  switch (action.type) {
    case PROCESS_CAPS_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};
export default process_caps_result;
