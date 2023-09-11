import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { RiLiveLine } from "react-icons/ri";
import {FiGitlab} from "react-icons/fi"
import {SiHashnode, SiReact, SiNodedotjs, SiMongodb, SiCss3, SiJavascript} from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";



import "./proj.css";
import { Col } from "react-bootstrap";
function ProjectCards(props) {
  
  return (
    <Card className="project-card-view">
      <br />
      <Card.Title><a target="_blank" href={props.linklive} rel="noreferrer" style={{color:"whitesmoke"}}>{props.title}</a></Card.Title>
      <Card.Img
        src={props.imgPath}
        alt="card-img"
        style={{ height: "250px" }}
      />
      
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <br/>
        <Card.Text style={{ textAlign: "center" }}>
          <span>Tech Stack: </span> <br />
          <span className="purple">{props.tech}</span>
        </Card.Text>

       

        {props.linkmedium || props.link || props.linklive ?<Col md={12} className="home-about-social">

          
          <p>
            Find<span className="purple"> More </span>below
            
          </p>

          <div style={{display: 'flex', justifyContent:'space-evenly'}}>
            {props.link?<div>
             <a href={props.link} target="_blank" style={{textDecoration: 'none', color:'white'}}> <AiFillGithub  style={{height: '40px', width: '40px'}} /> </a>
            </div>:""}
            {props.linkmedium?<div>
              <a href={props.linkmedium} target="_blank" style={{textDecoration: 'none', color:'white'}}><SiHashnode   style={{height: '40px', width: '40px'}} /></a>
            </div>:""}
            {props.linklive?<div>
              <a href={props.linklive} target="_blank" style={{textDecoration: 'none', color:'white'}}><BsBoxArrowUpRight   style={{height: '40px', width: '40px'}} /></a>
            </div>:""}
          </div>
        </Col>:""}
        {/* <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <br />
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <Button
          variant="primary"
          href={props.link}
          target="_blank"
          style={{ marginLeft: "20px" }}
        >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button> */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;