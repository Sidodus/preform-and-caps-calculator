import { CAP_LABEL_UNIT_PRICE } from "../actions/types";

const initialState = {
  label_price: ".00",
};

const cap_label_unit_price_reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAP_LABEL_UNIT_PRICE:
      return {
        ...state,
        label_price: action.payload === "0" ? ".00" : action.payload,
      };
    default:
      return state;
  }
};
export default cap_label_unit_price_reducer;
