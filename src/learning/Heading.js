//Heading component - Container SCC   - default - parent
import React from "react";
export default class Heading extends React.Component {
  // constructor, properties , methods
  constructor(props) {
    super(props);
    this.state = { username: "Sai" }; //state
  }
  render() {
    return (
      <div>
        <h2 className="bg-warning text-center">
          SPA Project in React for {this.props.company}
        </h2>
        <h4>by {this.state.username}</h4>
      </div>
    );
  }
}
//=========================================

Heading.defaultProps = {
  company: "Murthy infotek",
};
