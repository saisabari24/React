import React, { Component } from 'react'

export default class TextDisplay extends Component {
  render() {
    return (
      <div className="bg-warning">
         <h4 className="text-danger">Welcome {this.props.textProp}</h4>
       </div>
    )
  }
}
