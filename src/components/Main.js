import React, { Component } from "react";
import Circle from "./Circle";

class Main extends Component {
  state = { counter: 0 };

  handleAddOne = () => {
    console.log("this is: ", this);
    this.setState({ counter: this.state.counter + 1 });
  };

  handleAddFive = () => {
    this.setState({ counter: this.state.counter + 5 });
  };

  handleremoveOne = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  handleRemove5 = () => {
    this.setState({ counter: this.state.counter - 5 });
  };

  handleRemove1 = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  handleResetCounter = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <main>
        <div className="circle">{this.state.counter}</div>
        <Circle counter={this.state.counter} />
        <div className="buttons">
          <button type="button" onClick={this.handleAddFive}>
            Add 5
          </button>
          <button type="button" onClick={this.handleAddOne}>
            Add 1
          </button>
          <button type="reset" onClick={this.handleResetCounter}>
            Reset
          </button>
          <button type="button" onClick={this.handleRemove1}>
            Remove 1
          </button>
          <button type="button" onClick={this.handleRemove5}>
            Remove 5
          </button>
        </div>
      </main>
    );
  }
}

export default Main;
