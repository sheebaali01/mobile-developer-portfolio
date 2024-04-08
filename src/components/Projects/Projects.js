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
import oneLoundary from "../../Assets/Projects/oneloundary2.png";
import solo from "../../Assets/Projects/solo.png";
import pro from "../../Assets/Projects/pro.png";
import control from "../../Assets/Projects/control.png";
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
              imgPath={pro}
              isBlog={false}
              title="Novus Guard Pro"
              description="NovusGuard is an all-in-one Workforce Management app that ensures Physical Safety (Lone Work Protection)
              and Fleet Tracking, Geo-Fencing and Geo Tagging.
              "
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://apps.apple.com/nz/app/novus-guard/id1418564392"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solo}
              isBlog={false}
              title="Novus Guard Solo"
              description="NovusGuard Solo app ensures Physical Safety (Lone Individual Protection) along with Location Tracking"
              // ghLink="https://apps.apple.com/tr/app/novus-guard-solo/id1604127534"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={control}
              isBlog={false}
              title="Novus Guard Control"
              description="Novus Guard Control is a Workforce management solution that keeps track, of and manages the patrol of
              the employee. "
              // ghLink="https://apps.apple.com/nz/app/novus-control/id1464115021"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oneLoundary}
              isBlog={false}
              title="One Laundry"
              description="One Laundry is an on-demand laundry. Your clothes will be in the hands of an experienced and
              professional team."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://play.google.com/store/apps/details?id=com.entertechsolution.oneluandry&hl=en&gl=US&pli=1" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
