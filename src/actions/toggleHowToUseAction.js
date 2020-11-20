import { TOGGLE_HOW_TO_USE } from "./types";

export const toggleHowToUse = (toggle) => async (dispatch) => {
  dispatch({
    type: TOGGLE_HOW_TO_USE,
    payload: toggle,
  });
};
