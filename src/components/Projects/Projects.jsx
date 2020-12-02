import React from "react";
import ProjectsItem from "../ProjectsItem/ProjectsItem";
import data from "../../data/data.json";

export default function Projects() {
  return (
    <section id="projects">
      <div className="py-5 text-center">
        <h2 className="section-title font-weight-bold fade-in opacity-0">
          PROJECTS
        </h2>
        <div className="container mt-5" id="projectsContent">
          <div class="row">
            {data.map((item, i) => (
              <ProjectsItem key={i} data={data[i]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
