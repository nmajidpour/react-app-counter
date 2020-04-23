import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./components.css";
import AddIcon from "@material-ui/icons/AddCircle";
import RemoveIcon from "@material-ui/icons/RemoveCircle";
import FavouriteIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const itemcard = { textAlign: "center", width: "200px", marginTop: "20px" };
class Item extends Component {
  state = {
    count: this.props.value,
    name: this.props.name,
  };

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
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Text>
              <button onClick={this.handleIncrement} style={{ border: "none" }}>
                <AddIcon />
              </button>
              {this.state.count}
              <button onClick={this.handleDecrement} style={{ border: "none" }}>
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

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
}

export default Item;
