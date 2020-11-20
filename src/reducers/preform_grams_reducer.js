import { PREFORM_GRAMS } from "../actions/types";

const initialState = {
  grams: "24.7",
};

const preform_grams_reducer = (state = initialState, action) => {
  switch (action.type) {
    case PREFORM_GRAMS:
      return {
        ...state,
        grams: action.payload,
      };
    default:
      return state;
  }
};
export default preform_grams_reducer;
