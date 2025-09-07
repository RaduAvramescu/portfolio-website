import React from "react";

import styles from "./Contact.module.css";

const Contact = () => (
  <section id="contact">
    <div className="section-padding">
      <h2 className="section-title fw-bold text-center text-uppercase wow animate__animated animate__fadeIn">
        Contact
      </h2>
      <div className="container wow animate__animated animate__fadeIn">
        <form action="https://formspree.io/xwkrdeyq" method="POST">
          <div className="row justify-content-between">
            <div className={`col-md-5 position-relative ${styles["form-group"]}`}>
              <input
                className={`form-control ${styles["form-control"]}`}
                type="text"
                name="name"
                id="name"
                required
                placeholder=" "
              />
              <label htmlFor="name" className={`${styles.label} text-uppercase`}>
                Name
              </label>
            </div>

            <div className={`col-md-5 position-relative ${styles["form-group"]}`}>
              <input
                className={`form-control ${styles["form-control"]}`}
                type="email"
                name="_replyto"
                id="email"
                required
                placeholder=" "
              />
              <label htmlFor="email" className={`${styles.label} text-uppercase`}>
                Email
              </label>
            </div>

            <div className={`col-md-12 position-relative ${styles["form-group"]}`}>
              <textarea
                className={`form-control ${styles["form-control"]}`}
                name="message"
                id="message"
                required
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className={`${styles.label} text-uppercase`}>
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

export default Contact;
