import React, { Component } from "react";
import "./clock.css";
export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div className="main">
        <div className="containers">
          <h1>Hello, world!</h1>
          <h2>It is {this.state.time}.</h2>
        </div>
      </div>
    );
  }
}
