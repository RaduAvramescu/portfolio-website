import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import styles from "./Contact.module.css";

const Contact = () => {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [containerRef, containerVisible] = useIntersectionObserver();

  return (
    <section id="contact">
      <div className="section-padding">
        <h2
          ref={titleRef}
          className={`section-title fw-bold text-center text-uppercase animated fadeIn ${
            titleVisible ? "animate-in" : ""
          }`}
        >
          Contact
        </h2>
        <div
          ref={containerRef}
          className={`container animated fadeIn ${
            containerVisible ? "animate-in" : ""
          }`}
        >
          <form action="https://formspree.io/xwkrdeyq" method="POST">
            <div className="row justify-content-between">
              <div
                className="col-md-5 position-relative mb-5"
              >
                <input
                  className={`form-control ${styles["form-control"]} p-0 rounded-0 shadow-none border-top-0 border-start-0 border-end-0`}
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className={`${styles.label} text-uppercase fs-5 position-absolute top-0`}
                >
                  Name
                </label>
              </div>

              <div
                className="col-md-5 position-relative mb-5"
              >
                <input
                  className={`form-control ${styles["form-control"]} p-0 rounded-0 shadow-none border-top-0 border-start-0 border-end-0`}
                  type="email"
                  name="_replyto"
                  id="email"
                  required
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className={`${styles.label} text-uppercase fs-5 position-absolute top-0`}
                >
                  Email
                </label>
              </div>

              <div
                className="col-md-12 position-relative mb-5"
              >
                <textarea
                  className={`form-control ${styles["form-control"]} pt-2 p-0 rounded-0 shadow-none border-top-0 border-start-0 border-end-0`}
                  name="message"
                  id="message"
                  required
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className={`${styles.label} text-uppercase fs-5 position-absolute top-0`}
                >
                  Message
                </label>
              </div>

              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className={`btn btn-dark btn-lg ${styles["btn-submit"]}`}
                >
                  <span className="text-uppercase">Submit</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
