import React, { Component } from 'react';;

class Logo extends Component {
  static defaultProps ={
    name:'logo'
  }
  render() {
    // this.props.name='nike'
    return (
      <div className="App"  >
        {this.ref}
      </div>
    );
  }
}

export default Logo;
