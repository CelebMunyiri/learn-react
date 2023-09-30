import React from "react";
const Greet=({name,heroName})=>{
   // console.log({name,heroName})//This is how we destructure props in functional based components
return(
    <div>
        <h1> Hello {name} a.k.a {heroName}</h1>
    </div>
)}
export default Greet

