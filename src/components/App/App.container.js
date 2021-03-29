import React, { Component } from "react";
import WOW from "wowjs";
import "./App.css";
import AppView from "./App.view";

class App extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    return <AppView />;
  }
}

export default App;
