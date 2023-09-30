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
    <Person key={person.id} person={person}/>
        )
    return (
    <div>
      { personList }
    </div>
  )
}
//keys give the element a stable identity
//keys help react realize which elements are updated, removed ,added or change and handle crucial role in updating the UI
//keys should not be used to render any data as it will thow a warning //not a prop as key is something the browser needs to render the rest of the list efficiently
//key props are not accessible in the child components
export default List
