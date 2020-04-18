import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Counter from "./counter";
import About from "./about";
import App from "../App";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <Router>
            <Nav.Link><Link to="counter">Cart</Link></Nav.Link> 
            <Nav.Link><Link to="about">About</Link></Nav.Link>
            <Switch>
              <Route path="{/}" component={App}>
                <Route path="/counter" component={Counter}></Route>
                <Route path="/about" component={About}></Route>
              </Route>
            </Switch>
          </Router>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
