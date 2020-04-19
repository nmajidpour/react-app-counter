import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import MyList from "./components/mylist";
import Cart from "./components/cart";
import Items from "./components/items";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={NavLink} to="/">
            My React App
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/items">
              Items
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/mylist">
              Lists
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/items" exact component={Items} />
        <Route path="/mylist" exact component={MyList} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </Router>
  );
}

export default App;
