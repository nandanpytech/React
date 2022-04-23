import React, { Component } from "react";

class Mounting extends Component {
  constructor(props) {
    super(props);                                                       //1
    this.state = { favoritecolor: "red" };

  }
  
  static getDerivedStateFromProps(props, state) {                       //2
    return {favoritecolor: props.favcol };
  }

  componentDidMount() {
    setTimeout(() => {                                                  //4
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  render() {                                                            //3
    return <div>Mounting</div>;
  }
}

export default Mounting;
