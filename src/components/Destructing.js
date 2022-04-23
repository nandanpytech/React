import React from 'react'
function Greet(props){
    const {name} = props                
    return (
    <div>
        <h1>Hello {name}</h1>
    </div>    )
}
export default Greet