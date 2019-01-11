import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // this.props.name='nike'
    //console.log(this.props.key)
    return (
      <div className="App" ref="name" >
        123{this.props.name}
        {/* <Logo ref={this.refs.name}>
        {this.props.children}
        </Logo> */}
      </div>
    );
  }
}

export default App;
