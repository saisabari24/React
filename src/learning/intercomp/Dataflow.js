import React, { Component } from "react";

export default class Dataflow extends Component {
  state = { data: "initial data" };

  updateState(event) {
    //redux connect  or api call
    this.setState({ data: event.target.value });
  }
  render() {
    return (
      <div className="bg-info">
        <h2 className="text-success">Parent Component</h2>
        <h3>Data:{this.state.data}</h3>
        <br />
        <h2>Child Component</h2>
        <Content
          dataProp={this.state.data}
          updateStateProp={(event) => this.updateState(event)}
        ></Content>
        <br />
        <ContentSibling dataProp={this.state.data}></ContentSibling>
      </div>
    );
  }
}

//-----------------------------------

//Child1

const Content = (props) => {
  return (
    <div className="bg-warning">
      Enter Data:
      <input
        type="text"
        value={props.dataProp}
        onChange={props.updateStateProp}
      />
    </div>
  );
};

//child2

const ContentSibling = (props) => {
  return (
    <div className="bg-light text-danger">
      <h4>in Sibling:{props.dataProp}</h4>
      {/* <input
        type="text"
        value={props.dataProp}
        onChange={props.updateStateProp}
      /> */}
    </div>
  );
};
