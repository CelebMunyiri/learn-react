//styling in js using css 
//we can also used two classNmaes for same element
//we can also use inline styling in styling elements
import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className=props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
