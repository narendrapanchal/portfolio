import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle';
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import TransitionsModal from '../Modal/ContactModal';
import Aos from "aos";
import "aos/dist/aos.css";
export const Contact = () => {
    return (
      <div>
        <div>
            <Container fluid className="contact-section">
                <Particle />
                <Container fluid>
                  <h3 style={{maxWidth:"700px", margin:"auto"}}>My motive is to solve challenging Web development problems on a fast-pace and keep myself centered on creative problem-solving and continuous innovative. </h3>
            
            <br /> <h4>FIND ME ON</h4>
             <br />
             <Col>
              <div style={{display: 'grid', marginLeft: 'auto', margin:'auto', width:'250px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
              <a target="_blank" href="https://github.com/narendrapanchal" style={{textDecoration: 'none', color:'white'}}> <AiFillGithub style={{height: '40px', width: '30px'}} /> </a>
              </div>
              <div>
                <a target="_blank" href="https://twitter.com/narendrpanchalk" style={{textDecoration: 'none', color:'white'}}><AiOutlineTwitter style={{height: '40px', width: '30px'}} /></a>
              </div>
              <div>
                <a target="_blank" href="https://www.linkedin.com/in/narendra-kumar-panchal-7a09031ba/" style={{textDecoration: 'none', color:'white'}}><FaLinkedinIn style={{height: '30px', width: '40px'}} /></a>
              </div>
          </div>
          </Col>
          <br/>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            
          
            
            <h3>
              Contact No:
              <p
                href="tel:+7424800747"
                style={{
                  color: "#f0195a",
                }}
              >
                +91 7424800747
              </p>
            </h3>
            
            <h3>
              Email:
              <p
                href="tel:+7424800747"
                style={{
                  color: "#f0195a",
                  textJustify:"true",
                  wordBreak: "break-all"
                }}
              >
                narendrapanchal020@gmail.com
              </p>
            </h3> 
            </Container>
            </Container>    
        </div>
      <Container fluid className="home-about-section" id="about">
      <Container fluid>
        <Col md={12} className="home-about-social" data-aos="fade-up">
             <TransitionsModal/>
        </Col>
        </Container>
        </Container> 
        </div>
    )
}


