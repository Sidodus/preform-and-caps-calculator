import { CAP_LABEL_UNIT_PRICE } from "./types";

export const capLabelUnitPrice = (unitPrice) => async (dispatch) => {
  dispatch({
    type: CAP_LABEL_UNIT_PRICE,
    payload: unitPrice,
  });
};
