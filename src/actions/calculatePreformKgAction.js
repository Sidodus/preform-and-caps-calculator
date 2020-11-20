import { CALCULATE_PREFORM_KG } from "./types";

export const calculatePreformKg = (kg) => async (dispatch) => {
  dispatch({
    type: CALCULATE_PREFORM_KG,
    payload: kg,
  });
};
