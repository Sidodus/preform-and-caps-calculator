import { TOGGLE_HOW_TO_USE } from "../actions/types";

const initialState = {
  toggle: false,
};

const toggle_how_to_use_reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HOW_TO_USE:
      return {
        ...state,
        toggle: action.payload,
      };
    default:
      return state;
  }
};
export default toggle_how_to_use_reducer;
