import { CAP_PACK_PIECES } from "./types";

export const capsPackPieces = (pieces) => async (dispatch) => {
  dispatch({
    type: CAP_PACK_PIECES,
    payload: pieces,
  });
};
