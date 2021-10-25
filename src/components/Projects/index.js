import React from "react";
import { Container} from "reactstrap";
import ProjectsList from "./../ProjectList";

function Projects() {

  return (
    <div id="projects" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-pink">PORTFOLIO</p>
      </div>
      <Container>
        <ProjectsList />
      </Container>
    </div>
  );
}

export default Projects;