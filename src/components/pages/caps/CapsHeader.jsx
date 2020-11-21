import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { capPricePerUnit } from "../../../actions/capPricePerUnitAction";
import { capLabelUnitPrice } from "../../../actions/capLabelUnitPriceAction";

class CapsHeader extends Component {
  state = {
    inputCapPrice: "",
    inputCapLabelPrice: "",
  };

  valueChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitCapPrice = (e) => {
    e.preventDefault();

    // Only Run If User Enters An Input
    const { inputCapPrice } = this.state;
    if (inputCapPrice !== "") {
      this.props.capPricePerUnit(inputCapPrice);

      this.setState({ inputCapPrice: "" });
    }
  };

  submitCapLabelPrice = (e) => {
    e.preventDefault();

    // Only Run If User Enters An Input
    const { inputCapLabelPrice } = this.state;
    if (inputCapLabelPrice !== "") {
      this.props.capLabelUnitPrice(inputCapLabelPrice);

      this.setState({ inputCapLabelPrice: "" });
    }
  };

  render() {
    return (
      <div className="row col">
        <form onSubmit={this.submitCapPrice} className="col-md-6 mx-auto">
          <h4>
            <label htmlFor="inputCapPrice">Cap Price Per Unit: </label>
            <span style={{ fontSize: "larger" }}>
              ₦<span id="capPricePerUnit"></span>
            </span>
          </h4>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <button
                className="btn btn-success"
                style={{
                  borderRadius: "50px 15px 50px 15px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                type="submit"
              >
                Change Price
              </button>
            </div>
            <input
              id="inputCapPrice"
              style={{ borderRadius: "50px 15px 50px 15px" }}
              type="number"
              min="1"
              step="any"
              name="inputCapPrice"
              className="form-control"
              placeholder="Change Cap Price"
              value={this.state.inputCapPrice}
              onChange={this.valueChanged}
              required
            />
          </div>
        </form>
        {/* (((((((((((((((((((((((((((((((((((START))))))))))))))))))))))))))))))))))) */}
        <form onSubmit={this.submitCapLabelPrice} className="col-md-4 mx-auto">
          <h4>
            <label htmlFor="inputCapLabelPrice">Cap Labelling:- </label>
            <span id="capLabelPrice" style={{ fontSize: "larger" }}></span>k
          </h4>

          <div className="input-group mb-3">
            <div className="input-group-append">
              <button
                id="submitCapLabelBtn"
                className="btn btn-success"
                style={{
                  borderRadius: "50px 15px 50px 15px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                type="submit"
              >
                Set Label Unit Price
              </button>
            </div>
            <input
              id="inputCapLabelPrice"
              style={{ borderRadius: "50px 15px 50px 15px" }}
              type="number"
              min=".00"
              max=".99"
              step=".01"
              name="inputCapLabelPrice"
              className="form-control"
              placeholder="Cap Label Unit Price"
              value={this.state.inputCapLabelPrice}
              onChange={this.valueChanged}
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

CapsHeader.propTypes = {
  capPricePerUnit: PropTypes.func.isRequired,
  capLabelUnitPrice: PropTypes.func.isRequired,
};

export default connect(null, { capPricePerUnit, capLabelUnitPrice })(
  CapsHeader
);
