import { PREFORM_PACK_PIECES } from "../actions/types";

const initialState = {
  preform_pieces: "650",
};

const preform_pack_pieces_reducer = (state = initialState, action) => {
  switch (action.type) {
    case PREFORM_PACK_PIECES:
      return {
        ...state,
        preform_pieces: action.payload,
      };
    default:
      return state;
  }
};
export default preform_pack_pieces_reducer;
