import React, { Component } from 'react'
import Childrenprop from './Childrenprop'
class Parentprop extends Component {
    constructor() {
        super()
        this.state={
            parentname:"Parent"
        }
        
    }
    parenthandler(){
      alert('hi')
    }
  render() {
    return (
      <div>
          <Childrenprop greathandler={this.parenthandler}/>
      </div>
    )
  }
}

export default Parentprop