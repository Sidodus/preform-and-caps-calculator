import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { preformPackPieces } from "../../../actions/preformPackPiecesAction";
import { preformPackKg } from "../../../actions/preformPackKgAction";
import { processPreformResult } from "../../../actions/processPreformResultAction";
import processAllResults from "../../utils/processAllResults";

import PreformResult from "./PreformResult";
import { AlertInputDanger } from "../../utils/AlertInputDanger";

class PreformBody extends Component {
  state = {
    changePreformPackPieces: "",
    preformPiecesInput: "",
    preformPiecesInputStep: "",
    preformKgInput: "",
    preformKgInputStep: "",
  };

  componentDidMount() {
    // Hide Alert Note
    document.getElementById("preformAlertNote").style.display = "none";
    document.getElementById("kgAlertNote").style.display = "none";
  }

  static getDerivedStateFromProps(nextProps, preState) {
    return {
      preformPiecesInputStep: nextProps.preform_pieces_per_pack,
      preformKgInputStep: nextProps.preform_kg_per_pack,
    };
  }

  componentWillUnmount() {
    // Close Result BTN If Opened
    let toggler = JSON.parse(
      localStorage.getItem("TogglePreformDisplayResultBtn")
    );

    if (toggler) {
      document.getElementById("TogglePreformDisplayResultBtn").click();
      localStorage.setItem("TogglePreformDisplayResultBtn", false);
    }
  }

  valueChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changePreformPiecePerPackBtn = (e) => {
    e.preventDefault();

    // Only Run If User Enters An Input
    const { changePreformPackPieces } = this.state;
    if (changePreformPackPieces !== "") {
      localStorage.setItem(
        "preformPackPieces",
        JSON.stringify(changePreformPackPieces)
      );
      this.props.preformPackPieces(changePreformPackPieces);

      this.setState({ changePreformPackPieces: "" });
    }
  };

  calculatePreformPiecesBtn = (e) => {
    e.preventDefault();

    // Toggle Display BTN In Input Field Is Empty
    let toggler = JSON.parse(
      localStorage.getItem("TogglePreformDisplayResultBtn")
    );

    if (!toggler) {
      document.getElementById("TogglePreformDisplayResultBtn").click();
      localStorage.setItem("TogglePreformDisplayResultBtn", true);
    }

    // Only Run If User Enters An Input
    const { preformPiecesInput } = this.state;
    if (preformPiecesInput !== "") {
      const {
        preformGrams,
        preform_price_per_kg,
        preform_pieces_per_pack,
      } = this.props;

      const data = {
        preformPiecesInput,
        type: "Total Preform",
        preformGrams,
        preform_price_per_kg,
        preform_pieces_per_pack,
      };

      const result = this.props.processAllResults(data);

      localStorage.setItem("processPreformResult", JSON.stringify(result));

      this.props.processPreformResult(result);

      this.setState({ preformPiecesInput: "" });
    } else {
      // Display Alert Note
      document.getElementById("preformAlertNote").style.display = "block";

      setTimeout(function () {
        document.getElementById("preformAlertNote").style.display = "none";
      }, 5000);
    }
  };

  calculatePreformKgBtn = (e) => {
    e.preventDefault();

    // Display Result By Toggling Result BTN
    let toggler = JSON.parse(
      localStorage.getItem("TogglePreformDisplayResultBtn")
    );

    if (!toggler) {
      document.getElementById("TogglePreformDisplayResultBtn").click();
      localStorage.setItem("TogglePreformDisplayResultBtn", true);
    }

    // Only Run If User Enters An Input
    const { preformKgInput } = this.state;
    if (preformKgInput !== "") {
      const {
        preformGrams,
        preform_price_per_kg,
        preform_pieces_per_pack,
        preform_kg_per_pack,
      } = this.props;

      const data = {
        preformKgInput,
        type: "Total Kg",
        preformGrams,
        preform_price_per_kg,
        preform_pieces_per_pack,
        preform_kg_per_pack,
      };

      const result = this.props.processAllResults(data);

      localStorage.setItem("processPreformResult", JSON.stringify(result));

      this.props.processPreformResult(result);

      this.setState({ preformKgInput: "" });
    } else {
      // Display Alert Note
      document.getElementById("kgAlertNote").style.display = "block";

      setTimeout(function () {
        document.getElementById("kgAlertNote").style.display = "none";
      }, 5000);
    }
  };

  render() {
    const {
      changePreformPackPieces,
      preformPiecesInput,
      preformPiecesInputStep,
      preformKgInput,
      preformKgInputStep,
      result,
    } = this.state;

    return (
      <div
        className="col-md-11 mx-auto mb-3 py-1"
        style={{
          borderRadius: "15px 15px 50px 50px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div
          className="card mt-2 mb-2"
          style={{
            borderRadius: "15px 15px 50px 50px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <form
            onSubmit={this.changePreformPiecePerPackBtn}
            className="card-header"
          >
            <h4 className="row col text-secondary">Optional Field:</h4>
            <span className="text-secondary h6 float-right">PREFORM</span>
            <small>
              <label htmlFor="changePreformPackPieces">
                <i className="col-md-6 text-dark">
                  A pack contains <span id="preformPackPieces"></span> pieces of
                  Preform:{" "}
                </i>
              </label>
              <div
                className="col-md-6 input-group input-group-sm mb-3"
                style={{ marginLeft: "-17px" }}
              >
                <div className="input-group-append">
                  <button
                    id="changePreformPackPiecesBtn"
                    className="btn btn-primary"
                    style={{
                      borderRadius: "50px 15px 50px 15px",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                    type="submit"
                  >
                    Change Pieces
                  </button>
                </div>
                <input
                  id="changePreformPackPieces"
                  style={{ borderRadius: "50px 15px 50px 15px" }}
                  className="form-control"
                  type="number"
                  min="1"
                  step="any"
                  name="changePreformPackPieces"
                  placeholder="Per Pack"
                  value={changePreformPackPieces}
                  onChange={this.valueChanged}
                  required
                />
              </div>
            </small>
          </form>
          <div className="card-body bg-secondary text-light">
            <h4 className="row col text-light">
              <ins>Required Field</ins>:
            </h4>

            {/* (((((((((((((((((((((((((((((((((START))))))))))))))))))))))))))))))))) */}
            <div className="row col">
              <form className="col-md-6 mx-auto">
                <div className="form-group">
                  <label htmlFor="email">
                    <h5 style={{ margin: "2vh 0 -1vh 0" }}>
                      <span className="text-light">
                        Enter Preform Per Pack:
                      </span>

                      <div className="col text-body d-inline-flex justify-content-between">
                        <label htmlFor="preformPiecesInput">Total Pieces</label>
                      </div>
                    </h5>
                  </label>
                  {/* 99999999999999999999999999999999999999999999999999999999999 */}
                  <div id="preformAlertNote">
                    <AlertInputDanger />
                  </div>

                  {/* 99999999999999999999999999999999999999999999999999999999999 */}
                  <div className="input-group mb-3 input-group-md">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Pieces</span>
                    </div>
                    <input
                      id="preformPiecesInput"
                      className="form-control"
                      type="number"
                      step={String(preformPiecesInputStep)}
                      min={String(preformPiecesInputStep)}
                      name="preformPiecesInput"
                      placeholder="Input Preform Quantity"
                      value={preformPiecesInput}
                      onChange={this.valueChanged}
                      required
                    />
                  </div>
                </div>

                <button
                  onClick={this.calculatePreformPiecesBtn}
                  id="submitPreform"
                  className="btn btn-success mb-1"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "50px 50px 15px 15px",
                  }}
                  type="submit"
                >
                  Calculate Pieces
                </button>
              </form>
              {/* (((((((((((((((((((((((((((((((((END))))))))))))))))))))))))))))))))) */}
              <form className="col-md-6 mx-auto">
                <div className="form-group">
                  <label htmlFor="email">
                    <h5 style={{ margin: "2vh 0 -1vh 0" }}>
                      <span className="text-light">
                        Enter Preform Per Pack:
                      </span>

                      <div className="col text-body d-inline-flex justify-content-between">
                        <label htmlFor="preformKgInput">Total Kg</label>
                      </div>
                    </h5>
                  </label>
                  <div id="kgAlertNote">
                    <AlertInputDanger />
                  </div>
                  <div className="input-group mb-3 input-group-md">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Kg</span>
                    </div>
                    <input
                      id="preformKgInput"
                      type="number"
                      step={String(preformKgInputStep)}
                      min={String(preformKgInputStep)}
                      className="form-control"
                      name="preformKgInput"
                      placeholder="Input Preform Kg"
                      value={preformKgInput}
                      onChange={this.valueChanged}
                    />
                  </div>
                </div>

                <button
                  onClick={this.calculatePreformKgBtn}
                  id="submitKg"
                  className="btn btn-success float-right"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "50px 50px 15px 15px",
                  }}
                  type="submit"
                >
                  Calculate Kg
                </button>
              </form>
            </div>
          </div>

          <hr style={{ margin: "0 20px -6px 20px" }} />

          {/* submittedPreformAns */}
          <PreformResult result={result} />
        </div>
      </div>
    );
  }
}

PreformBody.propTypes = {
  preformPackPieces: PropTypes.func.isRequired,
  preform_pieces_per_pack: PropTypes.string.isRequired,
  preform_kg_per_pack: PropTypes.string.isRequired,
  unitPreformGrams: PropTypes.string.isRequired,
  preformPackKg: PropTypes.func.isRequired,
  preformGrams: PropTypes.string.isRequired,
  preform_price_per_kg: PropTypes.string.isRequired,
  processAllResults: PropTypes.func.isRequired,
  processPreformResult: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  preform_pieces_per_pack: state.preform_pack_pieces.preform_pieces,
  preform_kg_per_pack: state.preform_pack_kg.pack_kg,
  unitPreformGrams: state.preform_grams.grams,
  preformGrams: state.preform_grams.grams,
  preform_price_per_kg: state.preform_price_per_kg.price,
});

export default connect(mapStateToProps, {
  preformPackPieces,
  preformPackKg,
  processAllResults,
  processPreformResult,
})(PreformBody);
