import React from "react";
import ProjectsItem from "../ProjectsItem/ProjectsItem";
import data from "../../data/data.json";

export default function Projects() {
  return (
    <section id="projects">
      <div className="py-5 text-center">
        <h2 className="section-title font-weight-bold wow animate__animated animate__fadeIn">
          PROJECTS
        </h2>
        <div className="container mt-5" id="projectsContent">
          <div className="row">
            {data.map((item, i) => (
              <ProjectsItem
                key={i}
                data={data[i]}
                delay={`animate__delay-${i}s`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
