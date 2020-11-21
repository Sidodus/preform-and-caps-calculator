import React, { Component } from "react";

import Preform_Cap_Logo from "../layout/Preform_Cap_Logo.png";

class About extends Component {
  componentDidMount() {
    // Hide howToUseBtn In About & Formula Pages
    document.getElementById("howToUseBtn").style.display = "none";

    // Manage Menu Icons On Page Load
    document.getElementById("capsPage").style.color = "lightgray";
    document.getElementById("preformPage").style.color = "lightgray";
    document.getElementById("aboutPage").style.color = "black";
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
                    <span className="text-primary h4 p-2 float-left">
                      About
                    </span>
                    <h1
                      className="display-4 text-muted p-2 mb-4 text-center"
                      style={{
                        clear: "both",
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      }}
                    >
                      {" "}
                      Preform &amp; Caps Calculator <br />
                      <p className="text-secondary h6">Version 0.1.0</p>
                    </h1>
                  </div>
                  <div className="card-body bg-secondary text-light">
                    <article>
                      <header className="h3 text-dark">
                        <ins>What Is Preform</ins>
                      </header>
                      <p className="px-3" style={{ fontSize: "1.5rem" }}>
                        A preform is an article made of Polyethylene
                        Terephthalate, commonly known as PET. <br />
                        It is normally manufactured using a mould on an
                        injection system, which is subsequently blown into a
                        container for edible or non-edible liquids (water, soft
                        drinks, milk, alcohol, oils, detergents, personal care)
                        on a blow-moulding system. <br />
                        In practice, what comes out of the machine is a
                        test-tube shaped object with a threaded, finished neck
                        that is then transformed into a customized container
                        used to distinguish a specific brand. The preforms are
                        used both by companies involved in the creation of
                        packaging for third party companies, and by industries
                        that carry out all phases of production in house, from
                        creation of these PET articles to bottling of the end
                        product.
                      </p>
                      <header className="h3 text-dark">
                        <ins>What Is Cap</ins>
                      </header>
                      <p className="px-3" style={{ fontSize: "1.5rem" }}>
                        A cap is a protective cover that protects the content of
                        a preform as the preforms neck finish holds the cap
                        threading, with its protruding threads. <br />A preform
                        and its corresponding cap must have matching threading
                        for best fit.
                      </p>
                    </article>

                    <hr className="col-md-8 bg-light mt-5 mx-auto" />
                    <header className="h3 text-dark text-center">
                      <img
                        src={Preform_Cap_Logo}
                        alt="Logo"
                        style={{ width: "150px" }}
                      />
                      <br />
                      <ins>Preform &amp; Caps Calculator</ins>
                    </header>
                    <p
                      className="px-3 text-center"
                      style={{ fontSize: "1.5rem" }}
                    >
                      Preform & Caps Calculator is a useful application for
                      calculating the:
                      <li>Total Preform with Caps Quantities</li>
                      <li>Total Kilograms (Kg) Of Preform & Caps</li>
                      <li>Total Carton Of Preform & Caps</li>
                      <li>Total Crates Of Preform & Caps (of 12 Units)</li>
                      <li>Unit &amp; Total Amount</li>
                      of both Preform and Caps needed in production.
                    </p>
                  </div>
                  {/* ((((((((((((((((((((((((((((Start)))))))))))))))))))))))))))) */}
                  <h5 className="text-center text-muted">{/*  */}</h5>
                  <div className="card-body bg-secondary text-muted">`</div>
                  {/* ((((((((((((((((((((((((((((End)))))))))))))))))))))))))))) */}
                  <div className="card-footer">
                    <h6 className="text-secondary">
                      A Progressive Web App (PWA) Developed By
                      <a
                        href="https://github.com/Sidodus"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Sidodus
                      </a>
                    </h6>
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

export default About;
