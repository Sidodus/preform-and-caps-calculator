import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { displayNum, displayWord } from "./displayResults";

import { processPreformResult } from "../../actions/processPreformResultAction";
import { processCapsResult } from "../../actions/processCapsResultAction";

class DisplayResultsTable extends Component {
  clearResultTable = () => {
    // Only Clear (Specific) Table After Confirmation
    if (this.props.location.pathname === "/") {
      let preformResult = JSON.parse(
        localStorage.getItem("processPreformResult")
      );

      const confirmDeleteOfPreformResult = window.confirm(
        `Confirm Delete Of ${preformResult.type} Result`
      );

      if (confirmDeleteOfPreformResult) {
        document.getElementById("TogglePreformDisplayResultBtn").click();
        localStorage.setItem(
          "TogglePreformDisplayResultBtn",
          JSON.stringify(false)
        );

        // Let Table Close B4 Clearing It To Prevent The Glimpse Of...
        // ("You Must Enter Yor Input In The Required Field Above To Generate A Result")
        setTimeout(() => {
          this.props.processPreformResult({});

          localStorage.setItem("processPreformResult", JSON.stringify({}));
        }, 500);
      }
    } else if (this.props.location.pathname === "/caps") {
      let capsResult = JSON.parse(localStorage.getItem("processCapsResult"));

      const confirmDeleteOfCapsResult = window.confirm(
        `Confirm Delete Of ${capsResult.type} Result`
      );

      if (confirmDeleteOfCapsResult) {
        document.getElementById("ToggleCapsDisplayResultBtn").click();
        localStorage.setItem(
          "ToggleCapsDisplayResultBtn",
          JSON.stringify(false)
        );

        setTimeout(() => {
          this.props.processCapsResult({});

          localStorage.setItem("processCapsResult", JSON.stringify({}));
        }, 500);
      }
    }
  };
  render() {
    const {
      type,
      totalPacks,
      totalName,
      totalKg,
      totalCrates,
      capLabelUnitPrice,
      // capLabelTotalPrice,
      totalAmount,
      unitAmount,
    } = this.props.result;

    return (
      <div
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        {type ? (
          <div>
            <button
              id="clearResultTable"
              className="btn btn-danger float-right m-1"
              style={{
                border: "none",
                borderRadius: "50px 15px 15px 50px",
              }}
              onClick={this.clearResultTable}
            >
              Clear Result
            </button>
            <table
              style={{ borderRadius: "50px 15px 50px 15px", clear: "both" }}
              className="table table-dark table-bordered table-striped table-hover table-responsive-sm"
            >
              <tbody>
                <tr
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <td>
                    <h5>Total Packs:</h5>
                  </td>
                  <td>
                    <h5>
                      <span style={{ fontSize: "larger" }}>
                        <span id="capsPacksPieces">
                          {displayNum(totalPacks)}{" "}
                        </span>
                        <small>{totalPacks > 1 ? "Packs" : "Pack"}</small>
                      </span>
                    </h5>
                  </td>
                  <td>
                    {displayWord(totalPacks)}{" "}
                    <span className="lead" style={{ color: "darkgray" }}>
                      {totalPacks > 1 ? "Packs." : "Pack."}
                    </span>
                  </td>
                </tr>
                <tr
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <td>
                    <h5>{type === "Total Kg" ? "Total Preform" : type}:</h5>
                  </td>
                  <td>
                    <h5>
                      <span style={{ fontSize: "larger" }}>
                        <span id="capsPieces">{displayNum(totalName)} </span>
                        <small>{totalName > 1 ? "Pieces" : "Piece"}</small>
                      </span>
                    </h5>
                  </td>
                  <td>
                    {displayWord(totalName)}{" "}
                    <span className="lead" style={{ color: "darkgray" }}>
                      {totalName > 1 ? "Pieces." : "Piece."}
                    </span>
                  </td>
                </tr>

                {type !== "Total Caps" ? (
                  <tr
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <td>
                      <h5>Total Kg:</h5>
                    </td>
                    <td>
                      <h5>
                        <span style={{ fontSize: "larger" }}>
                          <span id="preformKg">{displayNum(totalKg)} </span>
                          <small>Kg</small>
                        </span>
                      </h5>
                    </td>
                    <td>
                      {displayWord(totalKg)}{" "}
                      <span className="lead" style={{ color: "darkgray" }}>
                        Kg.
                      </span>
                    </td>
                  </tr>
                ) : null}

                <tr
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <td>
                    <h5>Total Crates:</h5>
                  </td>
                  <td>
                    <h5>
                      <span style={{ fontSize: "larger" }}>
                        <span id="capsCrates">{displayNum(totalCrates)} </span>
                        <small>{totalCrates > 1 ? "Crates" : "Crate"}</small>
                      </span>
                    </h5>
                  </td>
                  <td>
                    {displayWord(totalCrates)}{" "}
                    <span className="lead" style={{ color: "darkgray" }}>
                      {totalCrates > 1 ? "Crates." : "Crate."}
                    </span>
                  </td>
                </tr>
                {/* Only Display If There Is  Label Price */}
                {Number(capLabelUnitPrice) > 0.0 ? (
                  <tr
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <td>
                      <h5>Label Unit Price:</h5>
                    </td>
                    <td>
                      <h5>
                        <span style={{ fontSize: "larger" }}>
                          <span id="capsUnitAmount">
                            {displayNum(capLabelUnitPrice)}
                          </span>
                          <span className="lead">k</span>
                        </span>
                      </h5>
                    </td>
                    <td>
                      {displayWord(capLabelUnitPrice, null, "money")}.{" "}
                      {/* <span className="lead" style={{ color: "darkgray" }}>
                    (Per Unit)
                  </span> */}
                    </td>
                  </tr>
                ) : null}
                <tr
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <td>
                    <h5>Unit Amount:</h5>
                  </td>
                  <td>
                    <h5>
                      <span style={{ fontSize: "larger" }}>
                        ₦
                        <span id="capsUnitAmount">
                          {displayNum(unitAmount)}
                        </span>
                      </span>
                    </h5>
                  </td>
                  <td>{displayWord(unitAmount, null, "money")}. </td>
                </tr>
                <tr
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <td>
                    <h5>Total Amount:</h5>
                  </td>
                  <td>
                    <h5>
                      <span style={{ fontSize: "larger" }}>
                        ₦<span id="capsAmount">{displayNum(totalAmount)}</span>
                      </span>
                    </h5>
                  </td>
                  <td>{displayWord(totalAmount, null, "money")}. </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <h6 className="col text-danger p-2 text-center">
            You Must Enter Yor Input In The Required Field Above To Generate A
            Result
          </h6>
        )}
      </div>
    );
  }
}

DisplayResultsTable.propType = {
  processPreformResult: PropTypes.func.isRequired,
  processCapsResult: PropTypes.func.isRequired,
};

export default withRouter(
  connect(null, { processPreformResult, processCapsResult })(
    DisplayResultsTable
  )
);
