import React from "react";
import ProjectsItem from "../ProjectsItem";
import data from "../../data/data.json";

const Projects = () => (
  <section id="projects">
    <div className="section-padding text-center">
      <h2 className="section-title font-weight-bold wow animate__animated animate__fadeIn">
        PROJECTS
      </h2>
      <div className="container" id="projectsContent">
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

export default Projects;
