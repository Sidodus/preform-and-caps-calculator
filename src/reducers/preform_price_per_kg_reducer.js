import { PREFORM_PRICE_PER_KG } from "../actions/types";

const initialState = {
  price: "850",
};

const preform_price_per_kg_reducer = (state = initialState, action) => {
  switch (action.type) {
    case PREFORM_PRICE_PER_KG:
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};
export default preform_price_per_kg_reducer;
