import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Helloo'
      }
      this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
           message:'Goodbye david'
       })
      //console.log(this)//this keyword is undefined
    }
  render() {
    return (
      <div>
        {this.state.message}
        {/* approach1 <button onClick={this.clickHandler.bind(this)}>Click</button>*/}
       {/* <button onClick={()=>this.clickHandler()}>Click</button>*/}
      <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
//using '.bind' causes the handler to rerender as it generates brandnew handler on every render
//this bind method is troublesome in large applications
//Arrow function method also has performance implications in some applications
//third method is the most efficient one where we use this.clickHandler=this.clickHandler.bind(this) in the constructor
export default Eventbind
