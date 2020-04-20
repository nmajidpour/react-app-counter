import React, { Component } from "react";
import Item from "./item";
import "./components.css";

class Items extends Component {
  state = {
    items: [
      { id: 1, name: "Item1", count: 0 },
      { id: 2, name: "Item2", count: 0 },
      { id: 3, name: "Item3", count: 0 },
      { id: 4, name: "Item4", count: 0 },
      { id: 5, name: "Item5", count: 0 },
    ],
  };
  render() {
    return (
      <div className="components">
        <table>
          <tbody>
            <tr>
              {this.state.items.map((item) => (
                <td>
                  <Item key={item.id} value={item.count} name={item.name} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Items;
