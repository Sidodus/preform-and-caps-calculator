import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layout/Header";
import Preform from "./components/pages/preform/Preform";
import Caps from "./components/pages/caps/Caps";
import About from "./components/pages/About";
import Formula from "./components/pages/Formula";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/layout/Footer";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome\\\\fontawesome-free/css/all.min.css";

class App extends Component {
  componentDidMount() {
    // Preset Toggle BTN
    let togglePreform = JSON.parse(
      JSON.parse(localStorage.getItem("TogglePreformDisplayResultBtn"))
    );
    let toggleCaps = JSON.parse(
      JSON.parse(localStorage.getItem("ToggleCapsDisplayResultBtn"))
    );

    if (togglePreform === null) {
      localStorage.setItem(
        "TogglePreformDisplayResultBtn",
        JSON.stringify(false)
      );
    }

    if (toggleCaps === null) {
      localStorage.setItem("ToggleCapsDisplayResultBtn", JSON.stringify(false));
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Preform} />
            <Route exact path="/caps" component={Caps} />
            <Route exact path="/about" component={About} />
            <Route exact path="/formula" component={Formula} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
