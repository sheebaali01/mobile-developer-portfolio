import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Versatile developer with 3+ years of iOS experience, complemented by proficiency in Flutter and Jetpack Compose. I specialize in designing and delivering top-notch mobile applications, showcasing expertise in multiple frameworks and technologies. My track record includes successful iOS projects,
demonstrating coding proficiency, problem-solving skills, and collaborative
development. The ability to work seamlessly across iOS, Flutter, and Jetpack
Compose ensures a well-rounded skill set for creating robust and user-friendly solutions in diverse mobile development environments
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
