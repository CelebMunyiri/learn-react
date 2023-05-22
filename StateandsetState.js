import React, {Component} from "react";
class StateandsetState extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    //we should never modify the state directly thts we use setState
    increment(){
        this.setState({
            count:this.state.count+1
        })
        
    }
    //place code inside callback functionin case you want to modify setState
    render(){
        return(
            <>
            Count {this.state.count}
            <button onClick={()=>this.increment()}>Increment</button>
            </>
        )
    }

}
export default StateandsetState