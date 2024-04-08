import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from '../../Assets/about.png'
import novusAltair from "../../Assets/Company/novusaltair.png";
import enterTech from "../../Assets/Company/entertech.jpg";
import luteBox from "../../Assets/Company/lutebox.jpg";
import level3BOS from "../../Assets/Company/level3bos.PNG";
import ExperienceCard from "./ExperienceCard";
import CompanyCards from "./CompanyCard";

function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Experience</strong> 
            </h1>
            <ExperienceCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <CompanyCards
              imgPath={level3BOS}
              title="Level3BOS"
              description="Mobile App Developer"
              start="Jan-2024"
              end="Present"
            />
          </Col>
          <Col md={4} className="project-card">
            <CompanyCards
              imgPath={novusAltair}
              title="Novus Altair"
              description="Mobile App Developer"
              start="May-2022"
              end="Dec-2023"
            />
          </Col>
          <Col md={4} className="project-card">
            <CompanyCards
              imgPath={enterTech}
              title="EnterTech Solution"
              description="Mobile App Developer"
              start="Aug-2021"
              end="Dec-2021"
            />
          </Col>
          <Col md={4} className="project-card">
            <CompanyCards
              imgPath={luteBox}
              title="Lutebox"
              description="Mobile App Developer"
              start="Oct-2019"
              end="July-2021"
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Experience;
