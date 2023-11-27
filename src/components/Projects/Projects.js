import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import Medium from "../../Assets/Projects/Medium.png";
import private_project from "../../Assets/private_project.jpg";
import Airbnb from "../../Assets/Projects/Airbnb.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import Frontend from "../../Assets/Projects/Frontend.png";
import Grocery from "../../Assets/Projects/Grocery.png";
// import suicide from "../../Assets/Projects/suicide.png";
import Tictac from "../../Assets/Projects/Tictac.png";
import shopclues from "../../Assets/shopclues.png";
import happycredit from "../../Assets/happycredit.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={happycredit}
              isBlog={false}
              title="HappyCredit"
              description="High performance seo responsive website.
               "
              tech="CSS | NextJs | Wordpress | Eleventy"
              linklive="https://happycredit.in/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={private_project}
              isBlog={false}
              title="Management Project"
              description="A project for management executives to handle user related queries."
              tech="MySQL | NodeJs  | ReactJs | Javascript"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Initial <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={shopclues}
              isBlog={false}
              title="EpicCartel"
              description="EpicCartel is an Indian online marketplace for a
              variety of products.
               "
              tech=" HTML | CSS | Javascript"
              link="https://github.com/narendrapanchal/shopclues"
              linkmedium="https://narendrapanchal020.hashnode.dev/cloning-shopclues"
              linklive="https://narendrapanchal.github.io/shopcluesclone.github.io/index.html"
            />
          </Col>

          {/* <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Medium}
              isBlog={false}
              title="StrawberryNet Clone "
              description="Medium is an American blog website where users can read blogs written by people around the world and can write their blog as well"
              tech="  MongoDB  |  NodeJs  | CSS | Javascript"
              link="https://github.com/shivam-singh-au17/ProjectMediumClone"
              linkmedium="https://medium.com/@yssambare/how-we-clone-the-strawberrynet-com-website-for-our-project-with-constructweek-experience-ed38cb6dc144"
              linklive="https://yssambare12.github.io/strawberrynetwithbackend.github.io/"
            />
          </Col> */}
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={Airbnb}
              isBlog={false}
              title="NestCheckIn"
              description="NestCheckIn is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in specific locales."
              tech="  MongoDB  |  NodeJs  | Redux | React"
              link="https://github.com/Gautam-8/Airbnb_clone"
              linkmedium="https://medium.com/@dsonar333/clone-of-airbnb-learn-team-work-4665c460c18f"
              linklive="https://gautam-8.github.io/Airbnb_clone/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;