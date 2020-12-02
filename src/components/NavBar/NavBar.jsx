import React, { useState } from "react";

const NavBar = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <header id="header" className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand font-weight-bold" href="/#">
          RADU AVRAMESCU
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link px-0 mx-3"
                href="/#"
                onClick={handleCollapse}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-0 mx-3"
                href="#projects"
                onClick={handleCollapse}
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-0 mx-3"
                href="#about"
                onClick={handleCollapse}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link px-0 mx-3"
                href="#contact"
                onClick={handleCollapse}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
