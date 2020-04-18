import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Counter from "./counter";
import About from "./about";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={NavLink} to="/">
              My React App
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cart">
                Cart
              </Nav.Link>
            </Nav>
          </Navbar>
          <Route path="/about" exact component={About} />
          <Route path="/cart" exact component={Counter} />
        </div>
      </Router>
    );
  }
}

export default Navigation;
