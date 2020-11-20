import { CAP_PRICE_PER_UNIT } from "./types";

export const capPricePerUnit = (price) => async (dispatch) => {
  dispatch({
    type: CAP_PRICE_PER_UNIT,
    payload: price,
  });
};
