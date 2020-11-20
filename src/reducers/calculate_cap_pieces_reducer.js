import { CALCULATE_CAP_PIECES } from "../actions/types";

const initialState = {
  cap_pieces: "",
};

const calculate_cap_pieces_reducer = (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE_CAP_PIECES:
      return {
        ...state,
        cap_pieces: action.payload,
      };
    default:
      return state;
  }
};
export default calculate_cap_pieces_reducer;
