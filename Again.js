import React, {Component} from "react";
class Again extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome to this Page'
        }
    }
    changeInfo(){
        this.setState({
            message:'Why did you click me Mzee'
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.message} {this.props.jina}</h1>
            <button onClick={()=>this.changeInfo()}>Touch Me</button>
            </>
        )
    }
}
export default Again