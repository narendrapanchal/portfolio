import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/portfolio/">
          <div>
            <img
              src="https://i.etsystatic.com/12499385/r/il/6849ae/2340102580/il_fullxfull.2340102580_8673.jpg"
              alt=""
              style={{ height: "35px", borderRadius: "10px" }}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/portfolio/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skills/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contacts
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
  <Nav.Link
    href="#"
    onClick={(e) => {
      e.preventDefault();
      updateExpanded(false);

      // 1. Open the resume for preview
      window.open(
        "https://drive.google.com/file/d/1wklzbS1NC6SEkyIP0Q__GT7GR7WThLL3/view?usp=sharing",
        "_blank"
      );

      // 2. Trigger the download
      const link = document.createElement("a");
      link.href = "https://drive.google.com/uc?export=download&id=1wklzbS1NC6SEkyIP0Q__GT7GR7WThLL3";
      link.setAttribute("download", "");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
    rel="noopener noreferrer"
  >
    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
  </Nav.Link>
</Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://hashnode.com/@sp2-044-narendra"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/narendrapanchal"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;