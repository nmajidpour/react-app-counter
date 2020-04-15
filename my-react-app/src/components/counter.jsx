import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeStyle()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-success btn-sm"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-danger btn-sm"
        >
          -
        </button>
        <ul>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.renderTags()}
        </ul>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  renderTags() {
    if (this.state.tags.count !== 0)
      return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  getBadgeStyle() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h5>zero</h5> : count;
  }
}

export default Counter;
