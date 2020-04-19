import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "././components.css";

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
          <Card.Body>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Text>
              <button
                onClick={this.handleIncrement}
                className="btn btn-success btn-sm"
              >
                +
              </button>
              {this.state.count}
              <button
                onClick={this.handleDecrement}
                className="btn btn-danger btn-sm"
              >
                -
              </button>
            </Card.Text>
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
