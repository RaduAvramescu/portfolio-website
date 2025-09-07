import React from "react";

import Technologies from "../Technologies";
import styles from "./About.module.css";

export default function NavBar() {
  return (
    <section id="about">
      <div className="section-alt-row section-padding text-center">
        <h2 className="section-title fw-bold wow animate__animated animate__fadeIn">
          ABOUT
        </h2>
        <h3 className="container section-description mb-5 wow animate__animated animate__fadeIn">
          I'm a frontend developer interested in staying up to date with
          technologies and constantly learning. Below is a collection of the
          technologies I use.
        </h3>
        <div className="col-md-12">
          <div className="wow animate__animated animate__fadeIn">
            <div className="container d-flex justify-content-center align-items-center">
              <div className={`${styles.slider} d-flex overflow-hidden`}>
                <div className={`${styles.slide} d-flex align-items-center`}>
                  <Technologies
                    technologies="HTML5 CSS3 Bootstrap Material-UI JavaScript React GraphQL Git npm"
                    width={70}
                  />
                </div>
                <div className={`${styles.slide} d-flex align-items-center`}>
                  <Technologies
                    technologies="HTML5 CSS3 Bootstrap Material-UI JavaScript React GraphQL Git npm"
                    width={70}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
