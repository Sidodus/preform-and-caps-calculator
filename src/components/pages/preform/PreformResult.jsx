import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DisplayResultsTable from "../../utils/DisplayResultsTable";

class PreformResult extends Component {
  componentDidMount() {
    let toggle = JSON.parse(
      JSON.parse(localStorage.getItem("TogglePreformDisplayResultBtn"))
    );

    // Display Table If Its Contains Info
    if (this.props.process_preform_result.type && !toggle) {
      document.getElementById("TogglePreformDisplayResultBtn").click();
      localStorage.setItem(
        "TogglePreformDisplayResultBtn",
        JSON.stringify(true)
      );
    }
  }

  toggler() {
    // Toggle Display BTN In Input Field Is Empty
    let toggler = JSON.parse(
      localStorage.getItem("TogglePreformDisplayResultBtn")
    );

    localStorage.setItem(
      "TogglePreformDisplayResultBtn",
      JSON.stringify(!toggler)
    );
  }
  render() {
    const { process_preform_result } = this.props;
    return (
      <div className="card-footer" style={{ border: "none" }}>
        <h4 className="row col text-secondary">Preform Result:</h4>
        <button
          data-target="#preformResult"
          id="TogglePreformDisplayResultBtn"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "15px 15px 50px 50px",
          }}
          className="col btn btn-outline-success btn-sm mb-4"
          data-toggle="collapse"
          onClick={this.toggler}
        >
          View Preform Result:
        </button>
        <div id="preformResult" className="col collapse">
          <DisplayResultsTable result={process_preform_result} />
        </div>
      </div>
    );
  }
}

PreformResult.propTypes = {
  process_preform_result: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  process_preform_result: state.process_preform_result.result,
});

export default connect(mapStateToProps)(PreformResult);
