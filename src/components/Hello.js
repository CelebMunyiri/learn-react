import React,{Component} from "react";

class Hello extends Component{
    constructor(){
        super()
        this.state={
            message:"Iam here"
        }

    }
    changeMessage=()=>{
        this.setState({
            message:"Information changed"
        })
    }
    render(){
        //Here we used the arrow function in the button handler event because we call a function thet is effective only once and does not have to update
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click me</button>
            </div>
            
        )
    }
    
}
export default Hello