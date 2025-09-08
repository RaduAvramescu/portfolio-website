import React from "react";
import TechnologyItem from "./components/TechnologyItem";

const Technologies = ({ technologies, width }) => {
  const techArray = technologies.split(" ");

  return (
    <>
      {techArray.map((tech) => (
        <TechnologyItem key={tech} techName={tech} width={width} />
      ))}
    </>
  );
};

export default Technologies;
