import React , { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

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
          <Nav.Link>My List</Nav.Link>
          <Nav.Link>Cart</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
