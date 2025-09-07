import React from "react";
import TechnologyItem from "./components/TechnologyItem";

const TECHNOLOGY_MAP = {
  HTML5: "HTML5",
  CSS3: "CSS3",
  JavaScript: "JavaScript",
  Bootstrap: "Bootstrap",
  "Material-UI": "Material-UI",
  React: "React",
  GraphQL: "GraphQL",
  Git: "Git",
  npm: "npm",
};

const Technologies = ({ technologies, width }) => {
  const techArray = technologies.split(" ");
  
  return (
    <>
      {techArray
        .filter(tech => TECHNOLOGY_MAP[tech])
        .map(tech => (
          <TechnologyItem 
            key={tech}
            techName={TECHNOLOGY_MAP[tech]} 
            width={width} 
          />
        ))}
    </>
  );
};

export default Technologies;
