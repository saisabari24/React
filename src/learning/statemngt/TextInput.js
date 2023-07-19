import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

export default class TextInput extends Component {
    state={inputText:'Murthy'}
    handleChange(event){
        this.setState({inputText:event.target.value})
    }

  render() {
    return (
      <>
      <h3>Events with controlled and uncontrolled components</h3>
      Company: <input type="text" id="txt1"/>
      <br/>     
      Country: <input type="text" value="India"/> 
      <br/>
      Username:
      <input type="text" value={this.state.inputText} 
        onChange={ (event)=>this.handleChange(event)}  
      />
            <h4>{this.state.inputText}</h4>

    {this.state.inputText ? console.log('Valid data') : console.log('invalid  - it is empty')}
 
   {
    this.state.inputText 
         ? <TextDisplay textProp={this.state.inputText}/>
         : <TextDisplay textProp="Enter username please...."/>              
   }

      </>
    )
  }
}
