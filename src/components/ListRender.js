import React from 'react'
import Person from './Person'

function ListRender() {
//   const names=["a","b","c","d"]
//   const namelist=names.map(name=><h1>{name}</h1>)
//   return (
//     <div>{
//         namelist
//         }</div>
//   )

    const personlist=[{
        name:"Nandan",
        age:30
    },
    {
        name:"Naveen",
        age:31
    }
        
    ]
    const personl=personlist.map(person=> <Person key={person.id} person={person}></Person>)
    return <div>{personl}</div>
}

export default ListRender