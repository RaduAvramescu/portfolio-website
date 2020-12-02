import React, { Component } from "react";

import WOW from "wowjs";

import {
  NavBar,
  Jumbotron,
  Projects,
  About,
  Contact,
  Footer,
} from "./components";
import "./App.css";

class App extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Jumbotron />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
