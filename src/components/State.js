import React,{Component} from 'react'
class State extends Component{
    constructor(){
        super()
        this.state ={
            message:"hi I am Nandan"
        }    
    }
    changemade(){
        this.setState({
            message:"Hi I am Amith"
        })
    }
    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changemade()}>click me</button>
            </div>
        )
    }
}
export default State