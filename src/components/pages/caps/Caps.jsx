import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CapsHeader from "./CapsHeader";
import CapsBody from "./CapsBody";

import JSnumberToWordProcessor from "js-number-to-word-processor";

class Caps extends Component {
  componentDidMount() {
    // Manage How To Use BTN By Setting Display Color To Lightgray On Page Change
    sessionStorage.setItem("howToUse", false);
    document.getElementById("howToUseBtn").style.color = "lightgray";

    // Manage Menu Icons On Page Load
    document.getElementById("capsPage").style.color = "black";
    document.getElementById("preformPage").style.color = "lightgray";
    document.getElementById("aboutPage").style.color = "lightgray";
    document.getElementById("formula").style.color = "lightgray";

    const {
      cap_price_per_unit,
      cap_label_unit_price,
      capsPiecesPerPack,
    } = this.props;

    document.querySelector(
      "#capPricePerUnit"
    ).innerText = JSnumberToWordProcessor(cap_price_per_unit, 2)[0].displayNum;
    document.querySelector(
      "#capLabelPrice"
    ).innerText = JSnumberToWordProcessor(
      cap_label_unit_price,
      2
    )[0].displayDecimalNum;
    document.querySelector(
      "#capsPackPieces"
    ).innerText = JSnumberToWordProcessor(capsPiecesPerPack, 1)[0].displayNum;
  }

  componentDidUpdate() {
    const {
      cap_price_per_unit,
      cap_label_unit_price,
      capsPiecesPerPack,
    } = this.props;

    document.querySelector(
      "#capPricePerUnit"
    ).innerText = JSnumberToWordProcessor(cap_price_per_unit, 2)[0].displayNum;
    document.querySelector(
      "#capLabelPrice"
    ).innerText = JSnumberToWordProcessor(
      cap_label_unit_price,
      2
    )[0].displayDecimalNum;
    document.querySelector(
      "#capsPackPieces"
    ).innerText = JSnumberToWordProcessor(capsPiecesPerPack, 1)[0].displayNum;
  }

  render() {
    return (
      <div
        className="card bg-secondary text-light"
        style={{
          border: "none",
          borderRadius: "15px 15px 50px 50px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        {/* ((((((((((((((((((((((((((((((++++++)))))))))))))))))))))))))))))) */}
        <div
          id="demo"
          className="mx-auto collapse mb-2 pr-3"
          style={{
            borderRadius: "15px 15px 50px 50px",
            boxShadow:
              "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <h6>
            <ul>
              <li>
                <ins>Optional Fields</ins>:
              </li>
              <ul>
                <li>
                  Only Change The Value In The Optional Field If Your Value For
                  Calculation Is Different From The Default Value
                </li>
              </ul>
            </ul>
          </h6>
          <h6>
            <ul>
              <li>
                <ins>Required Field</ins>:
              </li>
              <ul>
                <li>
                  You Are Required To Enter The Total Pieces Of Caps To Be
                  Calculated In In The "Total Pieces" Input Field, Then Click On
                  "Calculate Pieces".
                </li>
              </ul>
            </ul>
          </h6>
        </div>
        {/* ((((((((((((((((((((((((((((((++++++)))))))))))))))))))))))))))))) */}
        {/* <!-- Main Head --> */}
        <div
          className="card-header"
          style={{
            backgroundImage:
              "linear-gradient(lightgray 1%, white 30%, rgb(187, 202, 131) 100%)",
          }}
        >
          <h4 className="col mx-auto text-secondary">Optional Field:</h4>
          <div className="row text-muted">
            <CapsHeader />
          </div>
        </div>

        {/* <!-- Main Body --> */}
        <div
          className="card-body mt-1 mb-2"
          style={{
            borderRadius: "15px 15px 50px 50px",
            backgroundImage:
              "linear-gradient(rgb(187, 202, 131) 100%, white 5%, rgb(187, 202, 131) 100%)",
          }}
        >
          <div>
            <CapsBody />
          </div>
        </div>
      </div>
    );
  }
}

Caps.propType = {
  cap_price_per_unit: PropTypes.string.isRequired,
  cap_label_unit_price: PropTypes.string.isRequired,
  capsPiecesPerPack: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  cap_price_per_unit: state.cap_price_per_unit.price,
  cap_label_unit_price: state.cap_label_unit_price.label_price,
  capsPiecesPerPack: state.cap_pack_pieces.cap_pieces,
});

export default connect(mapStateToProps)(Caps);
