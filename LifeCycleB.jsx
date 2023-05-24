import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Munyiri'
      }
      console.log('LifeCycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
    return null
}
componentDidMount(){
    console.log('LifeCycleB componentDidMount')
}
  render() {
    console.log('LifeCycleB render')
    return (
      <div>
        
      </div>
    )
  }
}
 export default LifeCycleB