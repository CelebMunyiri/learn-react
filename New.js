import React from "react";
import './New.css'
import jamo from './images/jamo.jpg'
import pili from './images/pili.jpg'
import tatu from './images/tatu.jpg'

const New=(props)=>{
return (
    <div className="images">
    

    <img
    className="picha"
    src={jamo} 
    alt="jamo"
    />
    <img
    className="picha"
    src={pili} 
    alt="pili"
    />
    <img
    className="picha"
    src={tatu}
    alt="tatu" 
    />
    </div>

    
)
}
export default New