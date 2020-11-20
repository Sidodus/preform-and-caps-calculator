import { CALCULATE_CAP_PIECES } from "./types";

export const calculateCapPieces = (pieces) => async (dispatch) => {
  dispatch({
    type: CALCULATE_CAP_PIECES,
    payload: pieces,
  });
};
