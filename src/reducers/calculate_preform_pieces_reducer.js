import { CALCULATE_PREFORM_PIECES } from "../actions/types";

const initialState = {
  preform_pieces: "",
};

const calculate_preform_pieces_reducer = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE_PREFORM_PIECES:
      return {
        ...state,
        preform_pieces: action.payload,
      };
    default:
      return state;
  }
};
export default calculate_preform_pieces_reducer;
