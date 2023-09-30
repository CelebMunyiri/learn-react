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
shouldComponentUpdate(){
    console.log('LifeCycleB should ComponentUpdate')
    return true
}

getSnapshotBeforeUpdate(){
    console.log('LifeceycleB getSnapshotBeforeUpdate ')
return null
}

componentDidUpdate(){
    console.log('LifeCycleB componentDidUpdate')
}
  render() {
    console.log('LifeCycleB render')
    return (
      <div>
        
      </div>
    )
  }
}
//Unmount has on only one Method /ComponentWillUnmount used for canceling buttons, unsubscribe and in validating timers
 //we do not call setState when using this method
export default LifeCycleB