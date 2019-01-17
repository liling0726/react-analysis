import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      test:'initailState'
    }
  }
  handleClick=()=>{
    this.setState({
      test:'handleClick'
    })
    console.log(this.state.test)
  }
  componentWillMount(){
    this.setState({
      test:'componentWillMount'
    })
    console.log(this.state.test)
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        test:'componentDidMount setTimeout'
      })
      console.log(this.state.test)
    })
  }
  render() {
    
    // this.props.name='nike'
    //console.log(this.props.key)
    const { test } = this.state
    console.log(test)
    return (
      <div className="App" ref="name"  onClick={this.handleClick}>
        123{this.props.name}{test}
        {/* <Logo ref={this.refs.name}>
        {this.props.children}
        </Logo> */}
      </div>
    );
  }
}

export default App;
