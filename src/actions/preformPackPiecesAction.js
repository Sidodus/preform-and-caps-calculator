import { PREFORM_PACK_PIECES } from "./types";

export const preformPackPieces = (pieces) => async (dispatch) => {
  dispatch({
    type: PREFORM_PACK_PIECES,
    payload: pieces,
  });
};
