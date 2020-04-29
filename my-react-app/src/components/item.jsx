import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./components.css";
import AddIcon from "@material-ui/icons/AddCircle";
import RemoveIcon from "@material-ui/icons/RemoveCircle";
import FavouriteIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const itemcard = { textAlign: "center", width: "200px", marginTop: "20px" };
class Item extends Component {
  render() {
    return (
      <div className="container">
        <Card bg="light" text="dark" style={itemcard}>
          <span style={{ textAlign: "right" }}>
            <button style={{ border: "none" }}>
              <FavouriteIcon />
            </button>
          </span>
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>
              <button
                onClick={() => this.props.onIncrement(this.props.item)}
                style={{ border: "none" }}
              >
                <AddIcon />
              </button>
              {this.props.item.count}
              <button style={{ border: "none" }}>
                <RemoveIcon />
              </button>
            </Card.Text>
            <button className="btn btn-secondary">
              <AddShoppingCartIcon />
            </button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Item;
