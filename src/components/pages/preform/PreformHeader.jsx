import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { preformPricePerKg } from "../../../actions/preformPricePerKgAction";
import { preformGrams } from "../../../actions/preformGramsAction";

class PreformHeader extends Component {
  state = {
    preformGramsInput: "",
    preformPriceInput: "",
  };

  valueChanged = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitPreformPrice = (e) => {
    e.preventDefault();

    // Only Run If User Enters An Input
    const { preformPriceInput } = this.state;
    if (preformPriceInput !== "") {
      this.props.preformPricePerKg(preformPriceInput);

      this.setState({ preformPriceInput: "" });
    }
  };

  submitPreformGrams = (e) => {
    e.preventDefault();

    // Only Run If User Enters An Input
    const { preformGramsInput } = this.state;
    if (preformGramsInput !== "") {
      this.props.preformGrams(preformGramsInput);

      this.setState({ preformGramsInput: "" });
    }
  };

  render() {
    return (
      <div className="row col">
        <form onSubmit={this.submitPreformPrice} className="col-md-6 mx-auto">
          <h4>
            <label htmlFor="preformPriceInput">Preform Price Per Kg: </label>
            <span style={{ fontSize: "larger" }}>
              ₦<span id="preformPricePerKg"></span>
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
              id="preformPriceInput"
              style={{ borderRadius: "50px 15px 50px 15px" }}
              type="number"
              min="1"
              step="any"
              name="preformPriceInput"
              className="form-control"
              placeholder="Change Preform Price"
              value={this.state.preformPriceInput}
              onChange={this.valueChanged}
              required
            />
          </div>
        </form>

        <form onSubmit={this.submitPreformGrams} className="col-md-4 mx-auto">
          <h4>
            <label htmlFor="preformGramsInput">Preform Unit Grams: </label>
            <span id="PreformGrams" style={{ fontSize: "larger" }}></span>
            <span>grams</span>
          </h4>

          <div className="input-group mb-3">
            <div className="input-group-append">
              <button
                id="submitGrams"
                className="btn btn-success"
                style={{
                  borderRadius: "50px 15px 50px 15px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                type="submit"
              >
                Change Grams
              </button>
            </div>
            <input
              id="preformGramsInput"
              style={{ borderRadius: "50px 15px 50px 15px" }}
              type="number"
              min="1"
              step="any"
              name="preformGramsInput"
              className="form-control"
              placeholder="Set Preform Grams"
              value={this.state.preformGramsInput}
              onChange={this.valueChanged}
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

PreformHeader.propTypes = {
  preformPricePerKg: PropTypes.func.isRequired,
  preformGrams: PropTypes.func.isRequired,
};

export default connect(null, { preformPricePerKg, preformGrams })(
  PreformHeader
);
