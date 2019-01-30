// Code ControlledInput Component Here

import React, { Component } from 'react'

export default class ControlledInput extends Component {
  constructor(){
    super()
    this.state = {
      firstName: "Beau",
      lastName: "Jepson",
      value: ""
    }
  }

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }


  render(){
    return <div>
              <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName}/>
              <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName}/>
              <input type="submit" id="submit" value={this.state.firstName + " " + this.state.lastName}/>
          </div>
  }




}
