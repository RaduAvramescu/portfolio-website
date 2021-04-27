import { Fragment } from "react";

import TechnologyItem from "./components/TechnologyItem";

const Technologies = ({ technologies, width }) => (
  <Fragment>
    {technologies.includes("HTML") && (
      <TechnologyItem techName="HTML5" width={width}></TechnologyItem>
    )}
    {technologies.includes("CSS") && (
      <TechnologyItem techName="CSS3" width={width}></TechnologyItem>
    )}
    {technologies.includes("JavaScript") && (
      <TechnologyItem techName="JavaScript" width={width}></TechnologyItem>
    )}
    {technologies.includes("Bootstrap") && (
      <TechnologyItem techName="Bootstrap" width={width}></TechnologyItem>
    )}
    {technologies.includes("Material-UI") && (
      <TechnologyItem techName="Material-UI" width={width}></TechnologyItem>
    )}
    {technologies.includes("React") && (
      <TechnologyItem techName="React" width={width}></TechnologyItem>
    )}
    {technologies.includes("GraphQL") && (
      <TechnologyItem techName="GraphQL" width={width}></TechnologyItem>
    )}
    {technologies.includes("Git") && (
      <TechnologyItem techName="Git" width={width}></TechnologyItem>
    )}
    {technologies.includes("npm") && (
      <TechnologyItem techName="npm" width={width}></TechnologyItem>
    )}
  </Fragment>
);

export default Technologies;
