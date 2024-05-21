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
      <Home2 />
      
    </section>
  );
}

export default Home;