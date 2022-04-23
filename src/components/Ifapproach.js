import React, { Component } from 'react'
class Ifapproach extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         loggedIn:false
      }
    }
  render() {

    //Short Circuit Method  
    return(
        this.state.loggedIn && <div>Welcome Nandan</div>
    )

    //This is Ternary approach:  
    // return(
    //     this.state.loggedIn ? <div>
    //         Welcome Guest
    //     </div> : <div>Welcome Nandan</div>
    // )

    //This approach usign If-else Statement:
    // if(this.state.loggedIn){
    //     return(
    //         <div>
    //             Welcome Nandan
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }

    //This approach using Element Variables:
    // let message
    // if(this.state.loggedIn){
    //     message=<div>Welocome Nandan</div> 
    //    }else{
    //        message=<div>Welcome Guest</div>
    //    }
    //    return(
    //        <div>{message}</div>
    //    )
  }
}

export default Ifapproach