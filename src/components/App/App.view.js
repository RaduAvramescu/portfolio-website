import { Fragment } from "react";
import NavBar from "../NavBar";
import Jumbotron from "../Jumbotron";
import Projects from "../Projects";
import About from "../About/About";
import Contact from "../Contact";
import Footer from "../Footer";

const AppView = () => (
  <Fragment>
    <NavBar />
    <main>
      <Jumbotron />
      <Projects />
      <About />
      <Contact />
    </main>
    <Footer />
  </Fragment>
);

export default AppView;
