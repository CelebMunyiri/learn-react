import React from 'react'

function Person(person) {
  return (
    <div>
      <h2>Iam {person.name}. And my age is{person.age} with {person.skill} skills</h2>
    </div>
  )
}

export default Person
