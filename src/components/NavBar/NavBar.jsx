import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import styles from "./NavBar.module.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollPos: window.pageYOffset,
      isVisible: true,
      isCollapsed: true,
    };
  }

  handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollPos } = this.state;
    const curScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > curScrollPos;
    this.setState({
      prevScrollPos: curScrollPos,
      isVisible,
    });

    if (!isVisible && !this.state.isCollapsed) this.handleCollapse();
  };

  handleCollapse = () =>
    this.setState({ isCollapsed: !this.state.isCollapsed });

  render() {
    return (
      <header
        id="header"
        className={`fixed-top ${
          !this.state.isVisible ? `${styles["header-hide"]}` : ``
        }`}
      >
        <nav
          className={`navbar navbar-expand-lg navbar-dark ${styles["navbar-dark"]} bg-dark`}
        >
          <a
            className={`navbar-brand ${styles["navbar-brand"]} font-weight-bold`}
            href="/#"
            onClick={this.handleScrollToTop}
          >
            RADU AVRAMESCU
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!this.state.isCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={this.handleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${
              this.state.isCollapsed ? `collapse ${styles["collapse"]}` : ""
            } navbar-collapse ${styles["navbar-collapse"]}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                  href="/#"
                  onClick={this.handleCollapse}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                  href="#projects"
                  onClick={this.handleCollapse}
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                  href="#about"
                  onClick={this.handleCollapse}
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                  href="#contact"
                  onClick={this.handleCollapse}
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
}
