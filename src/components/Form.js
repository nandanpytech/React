import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message:""
    }
  }
  handlechanges=event=>{
    this.setState({
      message:event.target.value
    })
  }
  nandan=()=>{
    alert(`${this.state.message}`)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.nandan} >
          <label htmlFor="">Firstname</label>
          <input type="text" name="" id="" onChange={this.handlechanges} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form