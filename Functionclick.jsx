import React from 'react'

const Functionclick=()=> {
    function clickHandler(){
        console.log('Button clicked')
    }
  return (
    <div>
        
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
//when use click handler we should not use parenthsis as it is not a function call

export default Functionclick
//parenthesis are not used inside event handlers in react inside a button click event as it is not a function call but rather an event indicator to ask request resonse from the function
//event handling in function based components and class based components work the same, they have same implementation
