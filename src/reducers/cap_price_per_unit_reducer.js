import { CAP_PRICE_PER_UNIT } from "../actions/types";

const initialState = {
  price: "2.70",
};

const cap_price_per_unit_reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAP_PRICE_PER_UNIT:
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};
export default cap_price_per_unit_reducer;
