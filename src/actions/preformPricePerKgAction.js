import { PREFORM_PRICE_PER_KG } from "./types";

export const preformPricePerKg = (price) => async (dispatch) => {
  dispatch({
    type: PREFORM_PRICE_PER_KG,
    payload: price,
  });
};
