import React from 'react'
import { Route, Switch } from "react-router-dom";

import Header from './components/shared/header/header'
import Dashboard from './components/dashboard/dashboard';
import Settins from './components/setting/setting';
import './App.css'


const App = () => (
  <div>
    <Header></Header>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/setting" component={Settins} />
    </Switch>
  </div>
)
export default App
