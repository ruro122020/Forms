import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Signup from "../../components/signup/Signup";
import Login from "../../components/login/Login";
import Home from "../../components/home/Home";
import Pricing from "../../components/pricing/Pricing";
import Process from "../../components/process/Process";
import Projects from "../../components/projects/Projects";
function Navigation() {
  const location = useLocation();
  return (
    <div className="appContainer">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="background-color"
      >
        <Navbar.Brand as={Link} to="/">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto ">
            <Nav.Link as={Link} to="/" className="color-text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" className="color-text">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/process" className="color-text">
              Process
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="color-text">
              Projects
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/signup" className="color-text">
              Signup
            </Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/login" className="color-text">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Home} exact></Route>
          <Route path="/pricing" component={Pricing} exact></Route>
          <Route path="/process" component={Process} exact></Route>
          <Route path="/projects" component={Projects} exact></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default Navigation;
