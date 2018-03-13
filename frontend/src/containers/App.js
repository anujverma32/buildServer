import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { echo } from '../actions/echo'
import { serverMessage, testResponse, currentUser, profileData } from '../reducers'
import { test } from '../actions/test'
import { getProfile } from '../actions/user'
import { signOut } from "../actions/auth";
import Header from "../components/shared/header/header";
import './App.css'

class App extends Component {
  componentDidMount = () => {
    this.props.fetchMessage('Hi!')
    this.props.getProfile(this.props.currentUser.user_id)
  }
  buttonClicked = (event) => {
    this.props.sendTestmessage("hello django");
    console.log(this.props.profileData)
  }
  render() {
    return (
      <div>
        <Header {...this.props}/>
        <h2>Welcome</h2>
        <p>{this.props.message}</p>
        <button onClick={this.buttonClicked}>Click me!</button>
        <p>{this.props.data}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  message: serverMessage(state),
  data: testResponse(state),
  currentUser: currentUser(state),
  profileData: profileData(state)
})
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchMessage: echo, sendTestmessage: test, getProfile: getProfile, signOut: signOut }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
