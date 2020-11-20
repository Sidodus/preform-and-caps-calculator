import Big from "big.js";

const processAllResults = (data) => {
  const {
    type,
    preformPiecesInput,
    preformGrams,
    preform_pieces_per_pack,
    preform_kg_per_pack,
    preform_price_per_kg,
    preformKgInput,

    capsPiecesInput,
    capsPiecesPerPack,
    cap_price_per_unit,
    cap_label_unit_price,
  } = data;

  if (type === "Total Caps") {
    const totalName = Big(capsPiecesInput).toFixed();
    const totalPacks = Big(capsPiecesInput).div(capsPiecesPerPack).toFixed();
    const totalCrates = Big(capsPiecesInput).div(12).toFixed();
    const capLabelUnitPrice = Big(cap_label_unit_price).toFixed();
    const capLabelTotalPrice = Big(capLabelUnitPrice)
      .times(totalName)
      .toFixed();
    const totalAmount = Big(cap_price_per_unit)
      .times(capsPiecesInput)
      .plus(capLabelTotalPrice)
      .toFixed();
    const unitAmount = Big(cap_price_per_unit)
      .plus(capLabelUnitPrice)
      .toFixed();

    return {
      type,
      totalName,
      totalPacks,
      totalCrates,
      capLabelUnitPrice,
      capLabelTotalPrice,
      totalAmount,
      unitAmount,
    };
  } else if (type === "Total Preform") {
    const totalName = Big(preformPiecesInput).toFixed();
    const totalPacks = Big(preformPiecesInput)
      .div(preform_pieces_per_pack)
      .toFixed();
    const totalKg = Big(preformPiecesInput)
      .times(preformGrams)
      .div(1000)
      .toFixed();
    const totalCrates = Big(preformPiecesInput).div(12).toFixed();
    const totalAmount = Big(totalKg).times(preform_price_per_kg).toFixed();
    const unitAmount = Big(totalAmount).div(preformPiecesInput).toFixed();

    return {
      type,
      totalName,
      totalPacks,
      totalKg,
      totalCrates,
      totalAmount,
      unitAmount,
    };
  } else if (type === "Total Kg") {
    const totalName = Big(preformKgInput)
      .div(preform_kg_per_pack)
      .times(preform_pieces_per_pack)
      .toFixed();
    const totalPacks = Big(preformKgInput).div(preform_kg_per_pack).toFixed();
    const totalKg = Big(preformKgInput).toFixed();
    const totalCrates = Big(totalName).div(12).toFixed();
    const totalAmount = Big(totalKg).times(preform_price_per_kg).toFixed();
    const unitAmount = Big(totalAmount).div(totalName).toFixed();

    return {
      type,
      totalName,
      totalPacks,
      totalKg,
      totalCrates,
      totalAmount,
      unitAmount,
    };
  }
};

export default processAllResults;
