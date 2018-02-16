import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { echo } from '../actions/echo'
import { serverMessage, testResponse } from '../reducers'
import { test } from '../actions/test'
import './App.css'
import { Button } from 'reactstrap';

class App extends Component {
  componentDidMount() {
    this.props.fetchMessage('Hi!')
  }
  buttonClicked() {
    console.log(this);
    // this.props.sendTestmessage("hello django");
  }
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <p>{this.props.message}</p>
        <Button onClick={this.buttonClicked}>Click me!</Button>
        <p>{this.props.data}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  message: serverMessage(state),
  data: testResponse(state)
})
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchMessage: echo, sendTestmessage: test }, dispatch)
)

// Another way of defining mapDispatchToProps

// const mapDispatchToProps = (dispatch) => ({
//   fetchMessage: (message) => {
//     dispatch(echo(message))
//   },
//   sendTestmessage: (data) => {
//     dispatch(test(data))
//   }
// })

export default connect(mapStateToProps, mapDispatchToProps)(App);
