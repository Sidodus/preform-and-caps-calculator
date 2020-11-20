import { combineReducers } from "redux";
import preform_grams_reducer from "./preform_grams_reducer";
import preform_price_per_kg_reducer from "./preform_price_per_kg_reducer";
import cap_price_per_unit_reducer from "./cap_price_per_unit_reducer";
import cap_label_unit_price_reducer from "./cap_label_unit_price_reducer";
import preform_pack_pieces_reducer from "./preform_pack_pieces_reducer";
import cap_pack_pieces_reducer from "./caps_pack_pieces_reducer";
import calculate_preform_pieces_reducer from "./calculate_preform_pieces_reducer";
import calculate_cap_pieces_reducer from "./calculate_cap_pieces_reducer";
import calculate_preform_kg_reducer from "./calculate_preform_kg_reducer";
import process_caps_result_reducer from "./process_caps_result_reducer";
import process_preform_result_reducer from "./process_preform_result_reducer";
import preform_pack_kg_reducer from "./preform_pack_kg_reducer";
import toggle_how_to_use_reducer from "./toggle_how_to_use_reducer";

export default combineReducers({
  preform_grams: preform_grams_reducer,
  preform_price_per_kg: preform_price_per_kg_reducer,
  cap_price_per_unit: cap_price_per_unit_reducer,
  cap_label_unit_price: cap_label_unit_price_reducer,
  preform_pack_pieces: preform_pack_pieces_reducer,
  cap_pack_pieces: cap_pack_pieces_reducer,
  calculate_preform_pieces: calculate_preform_pieces_reducer,
  calculate_cap_pieces: calculate_cap_pieces_reducer,
  calculate_preform_kg: calculate_preform_kg_reducer,
  process_caps_result: process_caps_result_reducer,
  process_preform_result: process_preform_result_reducer,
  preform_pack_kg: preform_pack_kg_reducer,
  toggle_how_to_use: toggle_how_to_use_reducer,
});
