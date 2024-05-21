import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made by Narendra with ❤️</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3> </h3>
        </Col>
        <Col md="4" className="footer-body">
         <div style={{display: 'grid', marginLeft: 'auto',  width:'200px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
              <a  href="https://github.com/narendrapanchal" style={{textDecoration: 'none', color:'white'}}> <AiFillGithub style={{height: '20px', width: '20px'}} /> </a>
              </div>
              <div>
                <a href="https://twitter.com/narendrpanchalk" style={{textDecoration: 'none', color:'white'}}><AiOutlineTwitter style={{height: '20px', width: '20px'}} /></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/narendra-kumar-panchal-7a09031ba/" style={{textDecoration: 'none', color:'white'}}><FaLinkedinIn style={{height: '20px', width: '20px'}} /></a>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;