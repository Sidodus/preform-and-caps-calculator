import { CALCULATE_PREFORM_KG } from "../actions/types";

const initialState = {
  preform_kg: "",
};

const calculate_preform_kg_reducer = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE_PREFORM_KG:
      return {
        ...state,
        preform_kg: action.payload,
      };
    default:
      return state;
  }
};
export default calculate_preform_kg_reducer;
