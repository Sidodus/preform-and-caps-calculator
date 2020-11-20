import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  componentDidMount() {
    // Hide howToUseBtn In About & Formula Pages
    document.getElementById("howToUseBtn").style.display = "none";

    // Manage Menu Icons On Page Load
    document.getElementById("capsPage").style.color = "lightgray";
    document.getElementById("preformPage").style.color = "lightgray";
    document.getElementById("aboutPage").style.color = "lightgray";
    document.getElementById("formula").style.color = "lightgray";
  }

  componentWillUnmount() {
    // Display howToUseBtn After Existing About & Formula Pages
    document.getElementById("howToUseBtn").style.display = "block";
  }

  render() {
    return (
      <div
        style={{
          borderRadius: "15px 15px 50px 50px",
          backgroundColor: "gray",
          paddingBottom: "1px",
        }}
      >
        <div
          className="card-body mt-1 mb-2"
          style={{
            borderRadius: "15px 15px 50px 50px",
            backgroundImage:
              "linear-gradient(rgb(187, 202, 131) 100%, white 5%, rgb(187, 202, 131) 100%)",
          }}
        >
          <div>
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
                <div
                  className="card"
                  style={{ borderRadius: "15px 15px 50px 50px" }}
                >
                  <div className="card-header">
                    <h4 className="text-center">
                      <span className="text-danger display-4"> 404 </span> Page
                      Not Found
                    </h4>
                  </div>
                  <div className="card-body bg-secondary text-light">
                    <p className="text-center lead">
                      Sorry!!! The Requested Page Is Not Available.
                    </p>
                  </div>
                  <div className="card-footer">
                    <p className="h5 text-secondary pb-3 text-center">
                      Return To <Link to="/">Application</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
