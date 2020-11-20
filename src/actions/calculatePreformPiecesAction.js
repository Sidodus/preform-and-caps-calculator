import { CALCULATE_PREFORM_PIECES } from "./types";

export const calculatePreformPieces = (pieces) => async (dispatch) => {
  dispatch({
    type: CALCULATE_PREFORM_PIECES,
    payload: pieces,
  });
};
