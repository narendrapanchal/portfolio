import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";


import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import Resumecontent from "../Resume/ResumeContent";

import Aos from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn } from "react-icons/fa";
import TransitionsModal from "../Modal/ContactModal.jsx";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
function Home2() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <Container fluid className="home-about-section" id="about">
      <Container fluid>
        <Row>
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT ME
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Narendra Kumar Panchal </span>
            from <span className="purple"> Alwar, Rajasthan, India.</span>
            {/* <br /> I have completed my graduation in Electronics Engineering. */}<br/><br />
            A highly dedicated and passionate full-stack web developer with excellent administrative and communication skills and the ability to write efficient code.
            Looking forward to an exciting opportunity in a challenging role as a full-stack developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Workout in GYM
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Listninig Poetry and Panjabi songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Narendra</footer>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={4}
            className="myAvtar"
            data-aos="fade-down"
            style={{ marginTop: "-32px" }}
          >
            <Tilt>
              <img
                src="https://qtcinfotech.com/images/web-development/cms-website-development-service.gif"
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row className="resume" data-aos="fade-up">
          <Col md={6} className="resume-left">
            
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="A Bronze Medalist"
              content={[
                "Third position as a heavy weight lifter in bench press in the district. (Sep 2019) ",
              ]}
            />
            <Resumecontent
              title="RSCIT"
              content={[
                "Vardhman Mahaveer Open University, Kota (Sep 2018)",
              ]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title=" FULL STACK WEB DEVELOPMENT - Full Time  [ MASAI SCHOOL ] "
              date="AUG 2021 - FEB 2022"
              content={["1300+ hours of hands-on coding experience.", " Solved 300+ Data Structure & Algorithm problems.",
            "Received 100+ hours of Soft Skills training."]}
            />
            
            <Resumecontent
              title="12TH BOARD [ Bindal's Spectrum, Alwar, Rajasthan ]"
              date="2017 - 2018"
              content={["Completed with Mathematics"]}
            />
          
            {/* <h3 className="resume-title">Ranks and Achivements</h3> */}
            {/* <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12}>
            <About />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Projects />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" data-aos="fade-up">
            <h1>FIND ME ON</h1>
            <div style={{display: 'grid', marginLeft: 'auto', marginRight:'auto', width:'300px', gridTemplateColumns:'30% 30% 30%'}}>
              <div>
              <a href="https://github.com/narendrapanchal" style={{textDecoration: 'none', color:'white'}}> <AiFillGithub style={{height: '40px', width: '40px'}} /> </a>
              </div>
              <div>
                <a href="https://twitter.com/narendrpanchalk" style={{textDecoration: 'none', color:'white'}}><AiOutlineTwitter style={{height: '40px', width: '40px'}} /></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/narendra-kumar-panchal-7a09031ba/" style={{textDecoration: 'none', color:'white'}}><FaLinkedinIn style={{height: '40px', width: '40px'}} /></a>
              </div>
          </div>
          <br/>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            
            
            <h3>
              Contact No:
              <p
          
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
               
                style={{
                  color: "#f0195a",
                }}
              >
            narendrapanchal020@gmail.com
              </p>
            </h3>
            <br /> <br />
          </Col>

        </Row>
        <Col md={12} className="home-about-social" data-aos="fade-up">
        <TransitionsModal/>
        </Col>
      </Container>
    </Container>
    
  );
}
export default Home2;