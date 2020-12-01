import React from "react";

export default function Jumbotron() {
  return (
    <section id="jumbotron">
      <div className="jumbotron jumbotron-fluid d-flex justify-content-center vh-100 mb-0">
        <div className="container my-auto text-center">
          <div className="intro overflow-hidden">
            <h1 className="font-weight-bold">RADU AVRAMESCU</h1>
            <h2>Frontend Developer</h2>
            <div className="d-flex justify-content-center">
              <a
                className="d-flex align-items-center text-nowrap btn btn-dark btn-lg mt-3 px-4 py-3 font-weight-bold"
                href="#projects"
              >
                VIEW MY PROJECTS
                <svg viewBox="0 0 64 64" className="ml-3 btn-icon arrow-right">
                  <path
                    data-name="layer1"
                    d="M38.879 47.121l13.993-13.993.012-.012L55 31 38.879 14.879a3 3 0 0 0-4.242 4.242l8.879 8.88H13.999a3 3 0 0 0 0 6h29.515l-8.877 8.878a3 3 0 0 0 4.242 4.242z"
                    fill="#fff"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
