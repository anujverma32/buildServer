import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { isSidebarOpen } from '../reducers';
import { signOut } from "../actions/auth";
import { toggleSidebar } from "../actions/layout";

import Header from "../components/shared/header/header";
import Sidebar from "../components/shared/sidebar/sidebar";
import Dashboard from "../components/dashboard/dashboard";
import Servers from "./Servers/Servers";
import Profile from "../components/profile/profile";

import './App.css';

class App extends Component{
  render() {
    return (
      <div className="app-root">
        <Header {...this.props} />
        <main className="app-body">
          <Sidebar {...this.props} />
          <div className="app-content">
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/servers" component={Servers} />
              <Route exact path="/profile" component={Profile} />
              <Redirect exact from='/' to='/dashboard' />
            </Switch>
          </div>
        </main>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  isSidebarOpen: isSidebarOpen(state)
})
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ signOut: signOut, toggleSidebar: toggleSidebar }, dispatch)
)

export default connect( mapStateToProps, mapDispatchToProps )(App);
