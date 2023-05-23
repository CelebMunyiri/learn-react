//iterating a list of items
//lists rendering in react
import React from 'react'
import Person from './Person'

function List() {
    //this is a simple method by using map method
    //const names=['Dawud','Munyiri','Mwangi']
  
    //const nameList=names.map(name=><h3>{name}</h3>)
    const persons=[
        {
            id:1,
            name:'Mahu',
            age:22,
            skill:'React'
        },
        {
            id:2,
            name:'Munyiri',
            age:23,
            skill:'Python'
        },
        {
            id:3,
            name:'Dawud',
            age:21,
            skill:'ML'
        }
    ]
    const personList=persons.map(person=>
    <Person person={person}/>
        )
    return (
    <div>
      { personList }
    </div>
  )
}

export default List
