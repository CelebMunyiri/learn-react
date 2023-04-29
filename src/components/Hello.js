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
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click me</button>
            </div>
            
        )
    }
    
}
export default Hello