import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Counter from "./components/Counter";
import MyList from "./components/MyList";
import './App.css';

function App() {
  return ( 
    <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/">
          My React App
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/mylist">
            Lists
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
            Cart
          </Nav.Link>
        </Nav>
      </Navbar>
      <Route path="/mylist" exact component={MyList} />
      <Route path="/cart" exact component={Counter} />
    </div>
  </Router>
  );
}

export default App;
