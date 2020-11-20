import { PROCESS_CAPS_RESULT } from "./types";

export const processCapsResult = (data) => async (dispatch) => {
  dispatch({
    type: PROCESS_CAPS_RESULT,
    payload: data,
  });
};
