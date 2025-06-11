import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import Medium from "../../Assets/Projects/Medium.png";
import private_project from "../../Assets/private_project.png";
import Airbnb from "../../Assets/Projects/Airbnb.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import Frontend from "../../Assets/Projects/Frontend.png";
import Grocery from "../../Assets/Projects/Grocery.png";
// import suicide from "../../Assets/Projects/suicide.png";
import Tictac from "../../Assets/Projects/Tictac.png";
import shopclues from "../../Assets/shopclues.png";
import movix from "../../Assets/movix.png";
import trendingcards from "../../Assets/trending-cards.png";
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
          Here are recent projects where I made vital contributions at my previous organization.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={happycredit}
              isBlog={false}
              title="HappyCredit"
              description="This is a high-performance, SEO-optimized, responsive eCommerce website where users can purchase products that offer the best prices over an extended period."
              tech="CSS | NextJs | Wordpress | Eleventy"
              linklive="https://happycredit.in/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={private_project}
              isBlog={false}
              title="Vidya AI"
              description="A generative AI-powered chat assistant built to support both counselors and students in real-time communication."
              tech="Javascript | HTML | CSS |"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={movix}
              isBlog={false}
              title="Movix"
              description="Developed a personal project in 3 days to provide an overview of movies and TV shows. Implemented a search feature with toggle functionality to switch between movies and TV shows on the homepage. "
              tech=" HTML | CSS | Javascript | React"
              link="https://github.com/narendrapanchal/Movix"
              linklive="https://movix-9lee.onrender.com/"
            />
          </Col>

        
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={trendingcards}
              isBlog={false}
              title="Trending Cards"
              description="This is personal project executed in 3-4 days. Where a user can apply for the specific card and admin can approve or reject the application and can create new credit card and update or delete it."
              tech="  MongoDB  |  NodeJs  | React | JavaScript |"
              link="https://github.com/narendrapanchal/credit-card-frontend"
              linklive="https://credit-card-frontend-2.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Initial <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on while learning at Masai School.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={shopclues}
              isBlog={false}
              title="EpicCartel"
              description="EpicCartel serves as an Indian online marketplace offering a diverse range of products.
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
              description="NestCheckIn operates as an online marketplace facilitating connections between homeowners seeking to rent out their properties and individuals searching for accommodations in particular areas."
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