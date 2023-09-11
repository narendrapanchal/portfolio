import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiHeroku, SiVercel,SiJirasoftware,SiFigma,SiWordpress } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize:"12px", marginTop: "10px" }}>VS CODE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
        <p style={{fontSize:"12px", marginTop: "10px" }}>JIRA SOFTWARE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img width={72} height={72} src="https://tse4.mm.bing.net/th?id=OIP.jNLqkxBmafLZ7hsPseXBDQHaHa&pid=Api&P=0&h=180"/>
        <p style={{fontSize:"12px", marginTop: "10px" }}>WORKBENCH</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize:"12px", marginTop: "10px" }}>POSTMAN</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <p style={{fontSize:"12px", marginTop: "10px" }}>HEROKU</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p style={{fontSize:"12px", marginTop: "10px" }}>VERCEL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p style={{fontSize:"12px", marginTop: "10px" }}>FIGMA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
        <p style={{fontSize:"12px", marginTop: "10px" }}>WORDPRESS</p>
      </Col>
    </Row>
  );
}

export default Toolstack;