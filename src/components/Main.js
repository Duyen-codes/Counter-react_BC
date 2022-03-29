import React, { Component } from "react";
import Button from "./Button";
import classes from "./Main.module.css";

class Main extends Component {
  state = { counter: 0 };

  handleAddOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleAddFive = () => {
    this.setState({ counter: this.state.counter + 5 });
  };

  handleRemove5 = () => {
    this.state.counter < 5
      ? this.setState({ counter: 0 })
      : this.setState({ counter: this.state.counter - 5 });
  };

  handleRemove1 = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  handleResetCounter = () => {
    this.setState({ counter: 0 });
  };

  // render() function in Main component is returning JSX, which is just JavaScript
  render() {
    let className = "circle";
    if (this.state.counter % 2 == 0) {
      className += " even";
    } else {
      className += " odd ";
    }

    return (
      <main>
        <div className={className}>{this.state.counter}</div>
        <div className="buttons">
          <Button onClick={this.handleAddFive} value="Add 5"></Button>
          <Button onClick={this.handleAddOne} value="Add one"></Button>
          <Button
            type="reset"
            onClick={this.handleResetCounter}
            value="Reset"
          ></Button>
          <Button
            type="button"
            onClick={this.handleRemove1}
            value=" Remove 1"
          ></Button>
          <Button
            type="button"
            onClick={this.handleRemove5}
            value=" Remove 5"
          ></Button>
        </div>
      </main>
    );
  }
}

export default Main;
