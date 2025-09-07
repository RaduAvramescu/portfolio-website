import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import ProjectsItem from "../ProjectsItem";
import data from "../../data/data.json";

const Projects = () => {
  const [titleRef, titleVisible] = useIntersectionObserver();

  return (
    <section id="projects">
      <div className="section-padding text-center">
        <h2
          ref={titleRef}
          className={`section-title fw-bold text-uppercase animated fadeIn ${
            titleVisible ? "animate-in" : ""
          }`}
        >
          Projects
        </h2>
        <div className="container" id="projectsContent">
          <div className="row">
            {data.map((item, i) => (
              <ProjectsItem
                key={i}
                data={data[i]}
                delay={i * 0.1} // Convert to seconds for CSS animation-delay
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
