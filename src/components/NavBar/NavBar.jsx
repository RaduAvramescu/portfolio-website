import React from "react";

export default function NavBar() {
  return (
    <header id="header" className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand font-weight-bold" href="/#">
          RADU AVRAMESCU
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle=""
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          // onClick="toggleNav();"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link px-0 mx-3"
                href="/#"
                // onClick="toggleNav();"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-0 mx-3"
                href="#projects"
                // onClick="toggleNav();"
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-0 mx-3"
                href="#about"
                // onClick="toggleNav();"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-0 mx-3"
                href="#contact"
                // onClick="toggleNav();"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
