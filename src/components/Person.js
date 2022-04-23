import React from 'react'

function Person({person}) {
  return (
    <div>
        I am {person.name} and I am {person.age} old..
    </div>
  )
}

export default Person