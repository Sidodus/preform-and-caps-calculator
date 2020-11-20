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
    // Preset Toggler For Preform Required Field
    sessionStorage.setItem("TogglePreformDisplayResultBtn", false);
    sessionStorage.setItem("ToggleCapsDisplayResultBtn", false);
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
