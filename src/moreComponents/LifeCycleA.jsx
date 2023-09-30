import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Munyiri'
      }
      console.log('LifeCycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
    return null
}
componentDidMount(){
    console.log('LifeCycleA componentDidMount')
}
shouldComponentUpdate(){
    console.log('LifeCycleA should ComponentUpdate')
    return true
}

getSnapshotBeforeUpdate(){
  
  console.log('LifeceycleA getSnapshotBeforeUpdate ')
return null
}

componentDidUpdate(){
    console.log('LifeCycleA componentDidUpdate')
}
changeState=()=>{
this.setState({
    name:'Coder Abdul'
})
}
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycle A</div>
        <button onClick={this.changeState}>ChangeState</button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA
