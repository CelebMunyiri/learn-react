import React from 'react'

function NamesList() {
    //Using index as key value in props
    //using index as keys comes with some issues but can be used when adding only at the end
    //CONDITIONS FOR USING INDEX AS KEY
    //items in list do not have unique id
    //The list will never be re ordered or altered
    //The list is static
    const names=['Dawud','Munyiri','Mwangi','Dawud']
  
    const nameList=names.map((name,index)=><h2 key={index}>{name}</h2>)
    return (
    <div>
      {nameList}
    </div>
  )
}

export default NamesList
