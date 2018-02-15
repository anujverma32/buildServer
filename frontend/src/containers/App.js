import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { echo } from '../actions/echo'
import { serverMessage } from '../reducers'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchMessage('Hi!')
  }
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  message: serverMessage(state)
})
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchMessage: echo }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(App);
