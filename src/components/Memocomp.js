import React from 'react'

function Memocomp({name}) {
    console.log("heellor")
  return (
    <div>{name}</div>
  )
}

export default React.memo(Memocomp)