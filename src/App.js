import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/Skills/Home";
import Skills from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import {Contact} from "./components/contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
 
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/portfolio/" exact component={Home} />
          <Route path="/project/" component={Projects} />
          <Route path="/about/" component={About} />
          <Route path="/skills/" component={Skills} />
          <Route path="/resume/" component={Resume} />
          <Route path="/contact/" component={Contact} />
        </Switch>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </Router>
  );
}

export default App;