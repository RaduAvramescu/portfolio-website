import { Fragment } from "react";
import { Link } from "react-scroll";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "./NavBar.module.css";

const NavBarView = ({ isVisible, onScrollToTop, onCollapse, isCollapsed }) => (
  <Fragment>
    <header
      id="header"
      className={`fixed-top ${!isVisible ? `${styles["header-hide"]}` : ``}`}
    >
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${styles["navbar-dark"]} bg-dark px-3`}
      >
        <a
          className={`navbar-brand ${styles["navbar-brand"]} fw-bold`}
          href="#top"
          onClick={onScrollToTop}
        >
          RADU AVRAMESCU
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={onCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${
            isCollapsed ? `collapse ${styles["collapse"]}` : ""
          } navbar-collapse ${styles["navbar-collapse"]}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                href="#top"
                onClick={onScrollToTop}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                to="projects"
                smooth
                onClick={onCollapse}
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                to="about"
                smooth
                onClick={onCollapse}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                to="contact"
                smooth
                onClick={onCollapse}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div
      className={`${isVisible ? `${styles["btnTopScroller-hide"]}` : ``} ${
        styles.btnTopScroller
      }`}
    >
      <FaArrowCircleUp href="#top" onClick={onScrollToTop} />
    </div>
  </Fragment>
);

export default NavBarView;
