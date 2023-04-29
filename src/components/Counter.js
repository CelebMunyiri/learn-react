import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        },
        ()=>{console.log('callback value',this.state.count)
    })
    this.setState((prevState)=>({
      count:prevState.count+1
    }))
        
        console.log(this.state.count)
        

    }
    
    incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
    }
    
    
  render() {
    return (
      <div className='count'>
        
        <div className='item'>Count {this.state.count}</div>
        <div className='item'><button onClick={()=>this.incrementFive()}>Increment</button></div>
        
      </div>
    )
  }
}

export default Counter
