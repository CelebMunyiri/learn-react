import React, { Component } from 'react'

 class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true

    }
  }
  
    render() {
        //conditional rendering using short circuiting starts below
        return this.state.isLoggedIn && <div>Welcome Mahu</div>
        //condition rendering using ternary conditional operator starts here
       // return(
           // this.state.isLoggedIn ? 
           // <div>Welcome Munyiri abdul</div>:
           // <div>Welcome the guest</div>
       // )
        //condtional rendering using element variables starts below
        //let message
        //if(this.state.isLoggedIn){
          //  message=<div>Welcome Guests</div>
        //}
        //else{
          //  message=<div>Welcome Munyirii</div>
        //}
        //return(
          //  <div>{message}</div>
        //)
        //if else starts below
//if(this.state.isLoggedIn){
   // return(
    //    <div>Welcome Munyiri</div>
   // )
//}
//else{
    //return(
      //  <div>Welcome Guest</div>
    //)
//}
   // return (

    //  <div>
     //   <div>Welcome Munyiri</div>
     //   <div>Welcome Guest</div>
    //  </div>
    //)
  }
}

export default UserGreeting
