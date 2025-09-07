import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Technologies from "../Technologies";
import styles from "./About.module.css";

export default function About() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [descriptionRef, descriptionVisible] = useIntersectionObserver();
  const [technologiesRef, technologiesVisible] = useIntersectionObserver();

  return (
    <section id="about">
      <div className="section-alt-row section-padding text-center">
        <h2
          ref={titleRef}
          className={`section-title fw-bold text-uppercase animated fadeIn ${
            titleVisible ? "animate-in" : ""
          }`}
        >
          About
        </h2>
        <h3
          ref={descriptionRef}
          className={`container section-description mb-5 ${
            styles["text-balance"]
          } animated fadeIn ${descriptionVisible ? "animate-in" : ""}`}
        >
          I'm a frontend developer interested in staying up to date with
          technologies and constantly learning. Below is a collection of the
          technologies I use.
        </h3>
        <div className="col-md-12">
          <div
            ref={technologiesRef}
            className={`animated fadeIn ${
              technologiesVisible ? "animate-in" : ""
            }`}
          >
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
