import React, {Component} from "react";
class Welcome extends Component{
render(){
    const {name, heroName}=this.props//destructuring props in class based components

    return(
        <h3>Yoh Mr {name} aka {heroName}</h3>//now we can use them at ease
    )
}
}
export default Welcome