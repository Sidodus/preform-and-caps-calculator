import React, { Component } from "react";

export default class Formula extends Component {
  componentDidMount() {
    // Hide howToUseBtn In About & Formula Pages
    document.getElementById("howToUseBtn").style.display = "none";

    // Manage Menu Icons On Page Load
    document.getElementById("capsPage").style.color = "lightgray";
    document.getElementById("preformPage").style.color = "lightgray";
    document.getElementById("aboutPage").style.color = "lightgray";
    document.getElementById("formula").style.color = "black";
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
                    <h4>
                      Preform &amp; Caps Calculator Formula <br />
                      <sup className="text-muted">v0.1.0</sup>
                    </h4>

                    <h5
                      className="text-center text-muted"
                      style={{ marginBottom: "-1vh" }}
                    >
                      Preform Formula <i className="fa fa-hand-point-down" />
                    </h5>
                  </div>
                  <div className="card-body bg-secondary text-light">
                    <ol>
                      <li className="h5">
                        <ins className="text-dark">Total Packs</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ul>
                            <li>
                              Preform Pieces Input / Preform Pieces Per Pack
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                      <li className="h5">
                        <ins className="text-dark">Total Kg</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ins className="text-dark">Total Grams / 1000</ins>
                          <ul>
                            <li>
                              (Preform Pieces Input * Preform Grams) / 1000
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                      <li className="h5">
                        <ins className="text-dark">Total Crates</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ul>
                            <li>Preform Pieces Input / 12</li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                      <li className="h5">
                        <ins className="text-dark">Total Amount</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ins className="text-dark">
                            Total Kg * Preform Price Per Kg
                          </ins>
                          <ul>
                            <li>
                              ((Preform Pieces Input * Preform Grams) / 1000) *
                              Preform Price Per Kg
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                      <li className="h5">
                        <ins className="text-dark">Preform Unit Amount</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ins className="text-dark">
                            Total Amount / Preform Pieces Input
                          </ins>
                          <ul>
                            <li>
                              (((Preform Pieces Input * Preform Grams) / 1000) *
                              Preform Price Per Kg) / Preform Pieces Input
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                    </ol>
                  </div>

                  <h5 className="text-center text-muted">
                    Kg Formula <i className="fa fa-hand-point-down mt-3" />
                  </h5>
                  <div className="card-body bg-secondary text-light">
                    <ol>
                      <li className="h5">
                        <ins className="text-dark">Preform Kg Per Pack</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ul>
                            <li>
                              (Preform Pieces Per Pack * Preform Grams) / 1000
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                      <li className="h5">
                        <ins className="text-dark">Total Preform Pieces</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ins className="text-dark">
                            Preform Kg Input / Preform Kg Per Pack * Preform
                            Pieces Per Pack
                          </ins>
                          <ul>
                            <li>
                              (Preform Kg Input / ((Preform Pieces Per Pack *
                              Preform Grams) / 1000)) * Preform Pieces Per Pack
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                      <li className="h5">
                        <ins className="text-dark">Total Packs</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ins className="text-dark">
                            Preform Kg Input / Preform Kg Per Pack
                          </ins>
                          <ul>
                            <li>
                              Preform Kg Input / ((Preform Pieces Per Pack *
                              Preform Grams) / 1000)
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                      <li className="h5">
                        <ins className="text-dark">Total Crates</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ins className="text-dark">
                            Total Preform Pieces / 12
                          </ins>
                          <ul>
                            <li>
                              ((Preform Kg Input / ((Preform Pieces Per Pack *
                              Preform Grams) / 1000)) * Preform Pieces Per Pack)
                              / 12
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                      <li className="h5">
                        <ins className="text-dark">Total Amount</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ul>
                            <li>Total Kg * Preform Price Per Kg</li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                      <li className="h5">
                        <ins className="text-dark">Unit Amount</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ins className="text-dark">
                            Total Amount / Total Preform Pieces
                          </ins>
                          <ul>
                            <li>
                              (Total Kg * Preform Price Per Kg) / (Preform Kg
                              Input / ((Preform Pieces Per Pack *Preform Grams)
                              / 1000)) * Preform Pieces Per Pack
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                    </ol>
                  </div>

                  <h5 className="text-center text-muted">
                    Caps Formula <i className="fa fa-hand-point-down mt-3" />
                  </h5>
                  <div className="card-body bg-secondary text-light">
                    <ol>
                      <li className="h5">
                        <ins className="text-dark">Total Packs</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ul>
                            <li>Cap Pieces Input / Caps Pieces Per Pack</li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />

                      <li className="h5">
                        <ins className="text-dark">Total Crates</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ul>
                            <li>Caps Pieces Input / 12</li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />

                      <li className="h5">
                        <ins className="text-dark">Cap Label Total Price</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ul>
                            <li>Cap Label Price Per Unit * Cap Pieces Input</li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />

                      <li className="h5">
                        <ins className="text-dark">Cap Total Amount</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ins className="text-dark">
                            Cap Price Per Unit * Caps Pieces Input + Cap Label
                            Total Price
                          </ins>
                          <ul>
                            <li>
                              (Cap Price Per Unit * Caps Pieces Input) + (Cap
                              Label Unit Price * Cap Pieces Input)
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />

                      <li className="h5">
                        <ins className="text-dark">Cap Unit Amount</ins>
                        <ul style={{ listStyleType: "disc" }}>
                          <ul>
                            <li>
                              Cap Price Per Unit + Cap Label Price Per Unit
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <hr className="bg-light" />
                    </ol>
                  </div>
                </div>

                <div className="card-footer">
                  <h6 className="text-secondary">
                    Developed by
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
    );
  }
}
