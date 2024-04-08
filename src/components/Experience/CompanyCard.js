import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function CompanyCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center"}}>
          {props.description}
        <p>{props.start} - {props.end}</p>
        </Card.Text>
        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default CompanyCards;
