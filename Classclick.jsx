import React, { Component } from 'react'

export class Classclick extends Component {
  clickHandler(){
    console.log('Clicked me')
  }
  
    render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Clicked</button>
      </div>
    )
  }
}
//when creating an event handling function it is not neccessary to use function to define a function
//we use "this." in indicating the event handler as we do in states and props

export default Classclick

