import React, { Component } from 'react'

class ClickCounter extends Component {
  render() {
    return (
     
        <button onClick={this.props.incrementCount}>clicked{this.props.count}</button>
  
    )
  }
}

export default ClickCounter