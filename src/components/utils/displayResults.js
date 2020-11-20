import JSnumberToWordProcessor from "js-number-to-word-processor";

export const displayNum = (input, decimalStep) => {
  return JSnumberToWordProcessor(input, decimalStep).map((res) => {
    return (
      <span key={String(Math.random() * 100)}>
        {res.displayWholeNum}
        <small>
          <b>{res.decimalPoint ? res.displayDecimalNum : ""}</b>
        </small>
      </span>
    );
  });
};

export const displayWord = (input, decimalStep, money) => {
  return JSnumberToWordProcessor(input, decimalStep).map((res) => {
    if (res.displayNum === "0.00") {
      return <b key="zero">Zero</b>;
    }

    return (
      <b key={String(Math.random() * 100)}>
        {/* Display Whole Number:
         For Money; Only Run If Amount Is Greater Than 0
        For Numbers; Always Run  */}
        {money && Number(res.displayWholeNum) > 0
          ? res.displayWholeWord
          : !money
          ? res.displayWholeWord
          : Number(res.displayWholeNum) === 0
          ? ""
          : res.displayWholeWord}
        {/* Add Naira To Currency Amount */}
        {money && Number(res.displayWholeNum) > 0 ? (
          <span
            style={{ color: "darkgray", fontSize: "larger" }}
            className="lead"
          >
            {" "}
            Naira
          </span>
        ) : !money ? (
          ""
        ) : Number(res.displayWholeNum) === 0 ? (
          ""
        ) : (
          <span
            style={{ color: "darkgray", fontSize: "larger" }}
            className="lead"
          >
            {" "}
            Naira
          </span>
        )}
        {/* Add Separator Before Decimal Point:
         For Money; Greater Than 0; Add (&)
        For Numbers; Add (point)  */}
        {money && Number(res.displayWholeNum) > 0 ? (
          <span style={{ color: "darkgray" }}>
            {res.decimalPoint ? ", (&) " : ""}
          </span>
        ) : !money ? (
          <span style={{ color: "darkgray" }}>
            {res.decimalPoint ? ", (point) " : ""}
          </span>
        ) : Number(res.displayWholeNum) === 0 ? (
          ""
        ) : (
          <span style={{ color: "darkgray" }}>
            {res.decimalPoint ? ", (&) " : ""}
          </span>
        )}
        {/* Display Decimal Word */}
        {res.decimalPoint ? res.displayDecimalWord : ""}{" "}
        {/* Add "kobo" If Its Currency Amount & Currency Has Decimal Number */}
        {money && res.decimalPoint ? (
          <span
            style={{ color: "darkgray", fontSize: "larger" }}
            className="lead"
          >
            kobo
          </span>
        ) : (
          ""
        )}
      </b>
    );
  });
};
