import { PROCESS_PREFORM_RESULT } from "./types";

export const processPreformResult = (data) => async (dispatch) => {
  dispatch({
    type: PROCESS_PREFORM_RESULT,
    payload: data,
  });
};
