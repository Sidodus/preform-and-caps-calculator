import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { preformPackKg } from "../../../actions/preformPackKgAction";
import PreformBody from "./PreformBody";
import PreformHeader from "./PreformHeader";

import JSnumberToWordProcessor from "js-number-to-word-processor";

class Preform extends Component {
  componentDidMount() {
    // Manage How To Use BTN By Setting Display Color To Lightgray On Page Change
    sessionStorage.setItem("howToUse", false);
    document.getElementById("howToUseBtn").style.color = "lightgray";

    // Manage Menu Icons On Page Load
    document.getElementById("capsPage").style.color = "lightgray";
    document.getElementById("preformPage").style.color = "black";
    document.getElementById("aboutPage").style.color = "lightgray";
    document.getElementById("formula").style.color = "lightgray";

    const {
      grams,
      preform_price_per_kg,
      preformPiecesPerPack,
      unitPreformGrams,
    } = this.props;

    // Update Preform KG Per Pack
    this.props.preformPackKg(preformPiecesPerPack, unitPreformGrams);

    document.querySelector("#PreformGrams").innerText = JSnumberToWordProcessor(
      grams,
      1
    )[0].displayNum;
    document.querySelector(
      "#preformPricePerKg"
    ).innerText = JSnumberToWordProcessor(
      preform_price_per_kg,
      2
    )[0].displayNum;
    document.querySelector(
      "#preformPackPieces"
    ).innerText = JSnumberToWordProcessor(
      preformPiecesPerPack,
      1
    )[0].displayNum;
  }

  componentDidUpdate() {
    const {
      grams,
      preform_price_per_kg,
      preformPiecesPerPack,
      unitPreformGrams,
    } = this.props;

    // Update Preform KG Per Pack
    this.props.preformPackKg(preformPiecesPerPack, unitPreformGrams);

    document.querySelector("#PreformGrams").innerText = JSnumberToWordProcessor(
      grams,
      1
    )[0].displayNum;
    document.querySelector(
      "#preformPricePerKg"
    ).innerText = JSnumberToWordProcessor(
      preform_price_per_kg,
      2
    )[0].displayNum;
    document.querySelector(
      "#preformPackPieces"
    ).innerText = JSnumberToWordProcessor(
      preformPiecesPerPack,
      1
    )[0].displayNum;
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
                  You Are Required To Enter Either The Total Pieces Of Preform
                  To Be Calculated In In The "Total Pieces" Input Field, Then
                  Click On "Calculate Pieces".
                  <br />
                  OR <br />
                  Enter The Total Kilogram (Kg) Of Preform To Be Calculated In
                  The "Total Kg" Input Field And Click On "Calculate Kg".
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
            <PreformHeader />
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
            <PreformBody />
          </div>
        </div>
      </div>
    );
  }
}

Preform.propType = {
  grams: PropTypes.string.isRequired,
  preform_price_per_kg: PropTypes.string.isRequired,
  preformPiecesPerPack: PropTypes.string.isRequired,
  unitPreformGrams: PropTypes.string.isRequired,
  preformPackKg: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  grams: state.preform_grams.grams,
  preform_price_per_kg: state.preform_price_per_kg.price,
  preformPiecesPerPack: state.preform_pack_pieces.preform_pieces,
  unitPreformGrams: state.preform_grams.grams,
});

export default connect(mapStateToProps, { preformPackKg })(Preform);
