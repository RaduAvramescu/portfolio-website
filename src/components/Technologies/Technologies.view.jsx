import { Fragment } from "react";

import TechnologyItem from "./components/TechnologyItem";

const Technologies = ({ technologies }) => (
  <Fragment>
    {technologies.includes("HTML") && (
      <TechnologyItem techName="HTML5"></TechnologyItem>
    )}
    {technologies.includes("CSS") && (
      <TechnologyItem techName="CSS3"></TechnologyItem>
    )}
    {technologies.includes("JavaScript") && (
      <TechnologyItem techName="JavaScript"></TechnologyItem>
    )}
    {technologies.includes("Bootstrap") && (
      <TechnologyItem techName="Bootstrap"></TechnologyItem>
    )}
    {technologies.includes("Material-UI") && (
      <TechnologyItem techName="Material-UI"></TechnologyItem>
    )}
    {technologies.includes("React") && (
      <TechnologyItem techName="React"></TechnologyItem>
    )}
    {technologies.includes("GraphQL") && (
      <TechnologyItem techName="GraphQL"></TechnologyItem>
    )}
  </Fragment>
);

export default Technologies;
