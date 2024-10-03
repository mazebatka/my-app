import React, { Component } from "react";

export default class ClassComponent extends Component {
  componentDidMount() {
    console.log("This will run when the component is displayed");
  }
  componentWillUnmount() {
    console.log("This will run when the component is removed");
  }
  componentDidUpdate() {
    console.log("This will run when the component is updated");
  }
  render() {
    return (
      <div>
        <h1> This is a Class Component</h1>
      </div>
    );
  }
}
