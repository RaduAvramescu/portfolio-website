import React from "react";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-padding">
        <h2 className="section-title font-weight-bold text-center wow animate__animated animate__fadeIn">
          CONTACT
        </h2>
        <div className="container wow animate__animated animate__fadeIn">
          <form action="https://formspree.io/xwkrdeyq" method="POST">
            <div className="form-row justify-content-between">
              <div className={`col-md-5 form-group ${styles["form-group"]}`}>
                <input
                  className={`form-control ${styles["form-control"]}`}
                  type="text"
                  name="name"
                  id="name"
                  required
                />
                <label htmlFor="name" className={`${styles.label}`}>
                  NAME
                </label>
              </div>

              <div className={`col-md-5 form-group ${styles["form-group"]}`}>
                <input
                  className={`form-control ${styles["form-control"]}`}
                  type="email"
                  name="_replyto"
                  id="email"
                  required
                  placeholder=" "
                />
                <label htmlFor="email" className={`${styles.label}`}>
                  EMAIL
                </label>
              </div>

              <div className={`col-md-12 form-group ${styles["form-group"]}`}>
                <textarea
                  className={`form-control ${styles["form-control"]}`}
                  name="message"
                  id="message"
                  required
                ></textarea>
                <label htmlFor="message" className={`${styles.label}`}>
                  MESSAGE
                </label>
              </div>

              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className={`btn btn-dark btn-lg ${styles["btn-submit"]}`}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
