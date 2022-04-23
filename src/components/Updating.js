import React, { Component } from 'react'
class Updating extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      static getDerivedStateFromProps(props, state) {                   //1
        return {favoritecolor: props.favcol };
      }
      shouldComponentUpdate() {                                         //2
        return false;
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {                      //4
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
      }
      componentDidUpdate() {                                                //5
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
  render() {
    return (                                                                //3
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
    )
  }
}

export default Updating