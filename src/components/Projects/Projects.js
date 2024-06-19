import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import gb from "../../Assets/Projects/gb.png";
import sccr212 from "../../Assets/Projects/sccr212.png";
import sccr11 from "../../Assets/Projects/11sccr.png";
import gf from "../../Assets/Projects/gf.png";
import abt from "../../Assets/Projects/LogoFinalBlanc.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gf}
              isBlog={false}
              title="Comparateur Politique"
              description="An interactive questionnaire designed to help users identify the political party that aligns best with their views through a series of 20 questions, using HTML, CSS, JavaScript for the frontend, Node.js and Express for the backend, and EJS for template rendering."

              demoLink="https://comparateur-politique.alwaysdata.net/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gb}
              isBlog={false}
              title="Gourmet Box"
              description="Dynamic E-Commerce website dedicated to the employees of the business area. We developed the project with the “Express” Framework in Node JS. The DataBase processing is done with MongoDB and as for the code part, we used Bootstrap with HTML5 / CSS3 in HBS (handlebars) and Javascript."

              demoLink="https://www.youtube.com/watch?v=Am2jrf3rKhw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sccr11}
              isBlog={false}
              title="Line-up Soccer212"
              description="Creation of an application in react so that the user can have fun making his own team composition for the soccer212 site."

              demoLink="https://soccer212projectcompo.pages.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sccr212}
              isBlog={false}
              title="Soccer212"
              description="Website specialized in Moroccan football created with wordpress so that authors can more easily write articles as they are used to doing with wordpress."

              demoLink="https://soccer212.com/"
            />
          </Col>

              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abt}
              isBlog={false}
              title="L'atelier By Tamara"
              description="A WordPress project for a nail technician featuring online appointment scheduling and showcasing services."

              demoLink="https://latelierbytamara.fr/"
            />
              </Col>  


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
