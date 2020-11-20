import { PROCESS_PREFORM_RESULT } from "../actions/types";

const initialState = {
  result: {},
};

const process_preform_result = (state = initialState, action) => {
  switch (action.type) {
    case PROCESS_PREFORM_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};
export default process_preform_result;
