import React,{Component} from "react";

class State extends Component{
constructor(){
    super()
this.state={
    message:'Welcome Visitor'

    }
    
}
changeMessage(){
    this.setState({
        message:'Thankyou for subscribing'
    })
}
//state can be changed inside a component
//State is an object privately maintained inside a compenent
render(){
    return(
        <>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </>
        
        
    )
}
}
export default State