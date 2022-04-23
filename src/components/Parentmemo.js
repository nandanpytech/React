import React, { Component } from 'react'
import Memocomp from './Memocomp'

export class Parentmemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"nandan"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                message:"nandan"
            })
        },2000)
    }
  render() {
      console.log("hiiiiiiiiiiiii")
    return (
      <div>
          Parent Component
          <Memocomp name={this.state.message}></Memocomp>
      </div>
    )
  }
}

export default Parentmemo