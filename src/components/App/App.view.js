import { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import Jumbotron from "../Jumbotron/Jumbotron";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

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
