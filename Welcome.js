import React, {Component} from "react";
class Welcome extends Component{
render(){
    const {name, heroName}=this.props

    return(
        <h3>Yoh Mr {name} aka {heroName}</h3>
    )
}
}
export default Welcome