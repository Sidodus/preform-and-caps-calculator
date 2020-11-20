import React, { Component } from "react";
import { Link } from "react-router-dom";

import Preform_Cap_Logo from "../layout/Preform_Cap_Logo.png";

class Header extends Component {
  componentDidMount() {
    sessionStorage.setItem("howToUse", false);
  }

  toggleHowToUse = () => {
    const toggler = JSON.parse(sessionStorage.getItem("howToUse"));

    sessionStorage.setItem("howToUse", !toggler);

    if (!toggler) {
      document.getElementById("howToUseBtn").style.color = "black";
    } else {
      document.getElementById("howToUseBtn").style.color = "lightgray";
    }
  };

  render() {
    return (
      <div
        className="pb-1"
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
          <span
            onMouseOver={() => {
              document.getElementById("navBrandHover").style.opacity = ".7";
              document.getElementById("PCC").style.color = "black";
            }}
            onMouseOut={() => {
              document.getElementById("navBrandHover").style.opacity = "1";
              document.getElementById("PCC").style.color = "white";
            }}
          >
            <Link to="/" className="navbar-brand">
              <img
                id="navBrandHover"
                src={Preform_Cap_Logo}
                alt="Logo"
                style={{ width: "150px", margin: "-2vh 0" }}
              />
            </Link>
            <Link to="/" className="navbar-brand">
              <span id="PCC">Preform &amp; Caps Calculator</span>
            </Link>
          </span>
          {/* ((((((((((((((((((((((((((((((How To Use Start)))))))))))))))))))))))))))))) */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                href="/"
                id="howToUseBtn"
                className="nav-link"
                data-toggle="collapse"
                data-target="#demo"
                onClick={this.toggleHowToUse}
              >
                <i className="fa fa-book-reader" /> How To Use
              </a>
            </li>
          </ul>
          {/* ((((((((((((((((((((((((((((((How To Use End)))))))))))))))))))))))))))))) */}

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span id="preformPage">
                  <i className="fa fa-vial" /> Preform
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/caps" className="nav-link">
                <span id="capsPage">
                  <i className="fa fa-lemon" /> Caps
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formula" className="nav-link">
                <span id="formula">
                  <i className="fa fa-question-circle" /> Formula
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <span id="aboutPage">
                  <i className="fa fa-assistive-listening-systems" /> About
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
