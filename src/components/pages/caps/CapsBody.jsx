import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { capsPackPieces } from "../../../actions/capPackPiecesAction";
import { processCapsResult } from "../../../actions/processCapsResultAction";
import { calculateCapPieces } from "../../../actions/calculateCapPiecesAction";
import processAllResults from "../../utils/processAllResults";

import CapsResult from "../../pages/caps/CapsResult";
import { AlertInputDanger } from "../../utils/AlertInputDanger";

class CapsBody extends Component {
  state = {
    changeCapsPackPieces: "",
    capsPiecesInput: "",
    capsPiecesInputStep: "",
  };

  componentDidMount() {
    // Hide Alert Note
    document.getElementById("capsAlertNote").style.display = "none";
  }

  static getDerivedStateFromProps(nextProps, preState) {
    return { capsPiecesInputStep: nextProps.capsPiecesPerPack };
  }

  componentWillUnmount() {
    // Close Result BTN If Opened
    let toggler = JSON.parse(
      sessionStorage.getItem("ToggleCapsDisplayResultBtn")
    );

    if (toggler) {
      document.getElementById("ToggleCapsDisplayResultBtn").click();
      sessionStorage.setItem("ToggleCapsDisplayResultBtn", false);
    }
  }

  valueChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeCapPiecesPerPackBtn = (e) => {
    e.preventDefault();

    // Only Run If User Enters An Input
    const { changeCapsPackPieces } = this.state;
    if (changeCapsPackPieces !== "") {
      this.props.capsPackPieces(changeCapsPackPieces);

      this.setState({ changeCapsPackPieces: "" });
    }
  };

  calculateCapPiecesBtn = (e) => {
    e.preventDefault();

    // Only Run If User Enters An Input
    const { capsPiecesInput } = this.state;
    if (capsPiecesInput !== "") {
      // Display Result By Toggling Result BTN
      let toggler = JSON.parse(
        sessionStorage.getItem("ToggleCapsDisplayResultBtn")
      );

      if (!toggler) {
        document.getElementById("ToggleCapsDisplayResultBtn").click();
        sessionStorage.setItem("ToggleCapsDisplayResultBtn", true);
      }

      const {
        cap_price_per_unit,
        capsPiecesPerPack,
        cap_label_unit_price,
      } = this.props;

      const data = {
        capsPiecesInput,
        type: "Total Caps",
        cap_price_per_unit,
        capsPiecesPerPack,
        cap_label_unit_price,
      };

      const result = this.props.processAllResults(data);

      this.props.processCapsResult(result);

      this.setState({ capsPiecesInput: "" });
    } else {
      // Display Alert Note
      document.getElementById("capsAlertNote").style.display = "block";

      setTimeout(function () {
        document.getElementById("capsAlertNote").style.display = "none";
      }, 5000);
    }
  };

  render() {
    const {
      changeCapsPackPieces,
      capsPiecesInput,
      capsPiecesInputStep,
    } = this.state;
    return (
      <div
        className="col-sm-11 mx-auto mb-3 py-1"
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
            onSubmit={this.changeCapPiecesPerPackBtn}
            className="card-header"
          >
            <h4 className="row col text-secondary">Optional Field:</h4>
            <span className="text-secondary h6 float-right">CAPS</span>
            <small>
              <i className="col-md-6 text-dark">
                <label htmlFor="changeCapsPackPieces">
                  A Pack contains <span id="capsPackPieces"></span> pieces of
                  Caps:
                </label>
              </i>
              <div
                className="col-md-6 input-group input-group-sm mb-3"
                style={{ marginLeft: "-17px" }}
              >
                <div className="input-group-append">
                  <button
                    id="changeCapsPackPiecesBtn"
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
                  id="changeCapsPackPieces"
                  style={{ borderRadius: "50px 15px 50px 15px" }}
                  type="number"
                  className="form-control"
                  min="1"
                  step="any"
                  name="changeCapsPackPieces"
                  placeholder="Per Pack"
                  value={changeCapsPackPieces}
                  onChange={this.valueChanged}
                  required
                />
              </div>
            </small>
          </form>
          <div className="card-body bg-secondary text-light">
            <form className="col-md-6 mx-auto">
              <h4 className="row col" style={{ marginLeft: "-3vw" }}>
                <ins>Required Field</ins>:
              </h4>
              <div className="form-group">
                <label htmlhtmlFor="email">
                  <h5 style={{ margin: "2vh 0 -1vh 0" }}>
                    <span>Enter Caps Per Pack: </span> <br />
                    <label id="totalCapPieces">
                      <span className="col text-body">Total Pieces</span>
                    </label>
                  </h5>
                </label>
                <div id="capsAlertNote">
                  <AlertInputDanger />
                </div>
                <div className="input-group mb-3 input-group-md">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Packs</span>
                  </div>
                  <input
                    htmlFor="totalCapPieces"
                    id="capsPiecesInput"
                    className="form-control"
                    type="number"
                    step={String(capsPiecesInputStep)}
                    min={String(capsPiecesInputStep)}
                    name="capsPiecesInput"
                    placeholder="Input Caps Packs Number"
                    value={capsPiecesInput}
                    onChange={this.valueChanged}
                    required
                  />
                </div>
              </div>

              <button
                onClick={this.calculateCapPiecesBtn}
                id="submitCaps"
                className="btn btn-success"
                style={{
                  float: "right",
                  boxShadow:
                    "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  borderRadius: "50px 50px 15px 15px",
                }}
                type="submit"
              >
                Calculate Pieces
              </button>
            </form>
          </div>

          <hr style={{ margin: "0 20px -6px 20px" }} />
          {/* submittedCapsAns */}
          <CapsResult />
        </div>
      </div>
    );
  }
}

CapsBody.propTypes = {
  capsPackPieces: PropTypes.func.isRequired,
  calculateCapPieces: PropTypes.func.isRequired,
  processAllResults: PropTypes.func.isRequired,
  processCapsResult: PropTypes.func.isRequired,
  cap_price_per_unit: PropTypes.string.isRequired,
  capsPiecesPerPack: PropTypes.string.isRequired,
  cap_label_unit_price: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  cap_price_per_unit: state.cap_price_per_unit.price,
  capsPiecesPerPack: state.cap_pack_pieces.cap_pieces,
  cap_label_unit_price: state.cap_label_unit_price.label_price,
});

export default connect(mapStateToProps, {
  capsPackPieces,
  calculateCapPieces,
  processAllResults,
  processCapsResult,
})(CapsBody);
