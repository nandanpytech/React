import React from 'react'

function Event() {
    function clickhandler(){
        console.log("hii")
    }
  return (
    <div>
        <button onClick={clickhandler()}>
            Click me
        </button>
    </div>
  )
}

export default Event