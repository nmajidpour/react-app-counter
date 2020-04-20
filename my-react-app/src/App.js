import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import MyList from "./components/mylist";
import Cart from "./components/cart";
import Items from "./components/items";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavouriteIcon from "@material-ui/icons/FavoriteBorder";
import ListIcon from "@material-ui/icons/ViewList";
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
              <ListIcon /> Items
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/mylist">
              <FavouriteIcon /> Lists
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              <ShoppingCartIcon /> Cart
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
