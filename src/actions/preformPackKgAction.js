import { PREFORM_PACK_KG } from "./types";

export const preformPackKg = (preformPackPieces, preformGrams) => async (
  dispatch
) => {
  const kg = String((preformPackPieces * preformGrams) / 1000);
  dispatch({
    type: PREFORM_PACK_KG,
    payload: kg,
  });
};
