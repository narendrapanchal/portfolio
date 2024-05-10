import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/about.jpg";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import Asutosh from '../../Assets/narendra.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
import About from "../About/About";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content resume-section">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Narendra Kumar Panchal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} data-aos="fade-down">
              <Tilt>
              <img style={{background:"gray",borderRadius: "160px",background: `linear-gradient(135deg, #3498db, #c0392b)`}} src={Asutosh} alt="home pic" className="img-fluid"/>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      
    </section>
  );
}

export default Home;