import { PREFORM_PACK_KG } from "../actions/types";

const initialState = {
  pack_kg: "",
};

const preform_pack_kg_reducer = (state = initialState, action) => {
  switch (action.type) {
    case PREFORM_PACK_KG:
      return {
        ...state,
        pack_kg: action.payload,
      };
    default:
      return state;
  }
};
export default preform_pack_kg_reducer;
