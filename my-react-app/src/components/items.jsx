import React, { Component } from "react";
import Item from "./item";
import "./components.css";

class Items extends Component {
  state = {
    items: [
      { id: 1, name: "Apple", count: 0 },
      { id: 2, name: "Orange", count: 0 },
      { id: 3, name: "Blueberry", count: 0 },
      { id: 4, name: "Grape", count: 0 },
    ],
  };
  render() {
    return (
      <div className="components">
        {this.state.items.map((item) => (
          <Item className="row" key={item.id} value={item.count} name={item.name}/>
        ))}
      </div>
    );
  }
}

export default Items;
