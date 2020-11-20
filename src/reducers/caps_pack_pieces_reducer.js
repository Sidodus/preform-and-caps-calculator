import { CAP_PACK_PIECES } from "../actions/types";

const initialState = {
  cap_pieces: "5000",
};

const cap_pack_pieces_reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAP_PACK_PIECES:
      return {
        ...state,
        cap_pieces: action.payload,
      };
    default:
      return state;
  }
};
export default cap_pack_pieces_reducer;
