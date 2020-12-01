import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="py-5">
        <h2 className="section-title font-weight-bold text-center fade-in opacity-0">
          CONTACT
        </h2>
        <div className="container mt-5 fade-in opacity-0">
          <form action="https://formspree.io/xwkrdeyq" method="POST">
            <div className="form-row justify-content-between">
              <div className="form-group col-md-5">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="label">
                  NAME
                </label>
              </div>

              <div className="form-group col-md-5">
                <input
                  className="form-control"
                  type="email"
                  name="_replyto"
                  id="email"
                  required
                  placeholder=" "
                />
                <label htmlFor="email" className="label">
                  EMAIL
                </label>
              </div>

              <div className="form-group col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  required
                ></textarea>
                <label htmlFor="message" className="label">
                  MESSAGE
                </label>
              </div>

              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className="btn btn-dark btn-lg btn-submit"
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
