import React from 'react';
import { Route, Switch, Redirect } from 'react-router'

import Header from "../components/shared/header/header";
import Sidebar from "../components/shared/sidebar/sidebar";
import Dashboard from "../components/dashboard/dashboard";
import Settings from "../components/settings/settings";
import Profile from "../components/profile/profile";

import './App.css';

const App = () => (
  <div className="app-root">
    <Header/>
    <main className="app-body">
      <Sidebar />
      <div className="app-content">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from='/' to='/dashboard' />
        </Switch>
      </div>
    </main>
  </div>
);

export default App;
