import React from 'react'

function MemoComp({name}) {
    console.log(`Rendering Memo component`)
  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default React.memo(MemoComp)
//React.memo is used to achieve the performance advantage achieved using PureComponents in class based components by preveneing re-rendering
//React.memo is a higher order component