import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaAndroid } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiKotlin,
  SiFlutter,
  SiSwift,
  SiDart,
  SiApple,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiSwift />
      </Col>
      <Col xs={4} md={2} className="tech-icons">  
        <SiApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart /> 
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
      <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAndroid />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>  
      
        
    </Row>
  );
}

export default Techstack;
