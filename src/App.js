import React from "react";

import {
  NavBar,
  Jumbotron,
  Projects,
  About,
  Contact,
  Footer,
} from "./components";
import "./App.css";

function App() {
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

export default App;
