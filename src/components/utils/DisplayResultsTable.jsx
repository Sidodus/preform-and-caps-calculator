import React, { Component } from "react";
import { displayNum, displayWord } from "./displayResults";

export class DisplayResultsTable extends Component {
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
          <table
            style={{ borderRadius: "50px 15px 50px 15px" }}
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
                      ₦<span id="capsUnitAmount">{displayNum(unitAmount)}</span>
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
