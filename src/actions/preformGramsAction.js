import { PREFORM_GRAMS } from "./types";

export const preformGrams = (grams) => async (dispatch) => {
  dispatch({
    type: PREFORM_GRAMS,
    payload: grams,
  });
};
