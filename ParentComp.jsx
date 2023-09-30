import React, { Component,PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
      
        this.state = {
           name:'Munyiri Abdul'
        }
      }
      componentDidMount(){
        setInterval(()=>{
this.setState({
    name:'Munyiri Abdul'
})
        },2000)
      }
    render() {
        console.log('*******Parent Comp render***')
    return (
      <div>
       Parent Component 
       <RegularComp name={this.state.name}/>
       <PureComp name={this.state.name}/>
      </div>
    )
  }
}
//Difference between pure component and regular component
//REGULAR COMPONENT
//Does not implement the ShouldComponentUpdate method, it always returns true by default

//PURE COMPONENT
//Implements shouldComponentUpdate with a shallow props and stateComparison

//SHALLOW COMPARISON SC
//a SC b returns true if a and b have the same value and are of the same type
//Example string 'Munyiri' (SC) string 'Munyiri' returns true

//COMPLEX TYPES (OBJECTS & ARRAYS)
// a (SC) b returns true if a and b reference the exact same object

//SUMMARY
//We can create a component by extending the PureComponent class
//A pure component implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the compenent
//If there is no difference, component is not re-rendered and there is performance boost
//never mutate state 

export default ParentComp
