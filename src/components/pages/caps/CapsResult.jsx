import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DisplayResultsTable } from "../../utils/DisplayResultsTable";

class CapsResult extends Component {
  componentDidMount() {
    // Display Table If Its Contains Info
    if (this.props.process_caps_result.type) {
      document.getElementById("ToggleCapsDisplayResultBtn").click();
      sessionStorage.setItem("ToggleCapsDisplayResultBtn", true);
    }
  }

  toggler() {
    // Toggle Display BTN In Input Field Is Empty
    let toggler = JSON.parse(
      sessionStorage.getItem("ToggleCapsDisplayResultBtn")
    );

    sessionStorage.setItem("ToggleCapsDisplayResultBtn", !toggler);
  }
  render() {
    const { process_caps_result } = this.props;

    return (
      <div className="card-footer" style={{ border: "none" }}>
        <h4 className="row col text-secondary">Caps Result:</h4>
        <button
          data-target="#capsResult"
          id="ToggleCapsDisplayResultBtn"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "15px 15px 50px 50px",
          }}
          className="col btn btn-outline-success btn-sm mb-4"
          data-toggle="collapse"
          onClick={this.toggler}
        >
          View Caps Result:
        </button>
        <div id="capsResult" className="col collapse">
          <DisplayResultsTable result={process_caps_result} />
        </div>
      </div>
    );
  }
}

CapsResult.propTypes = {
  process_caps_result: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  process_caps_result: state.process_caps_result.result,
});

export default connect(mapStateToProps)(CapsResult);
