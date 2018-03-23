import React from 'react'
import { Route, Switch } from 'react-router';
import ServerForm from './ServerForm';
import ServersList from './ServerList';

const Servers = (props) => {
    return (
        <div className="settings-container" >
            <Switch>
                <Route exact path="/servers" component={ServersList} />
                <Route exact path="/servers/new" component={ServerForm} />
                <Route exact path="/servers/:id" component={ServerForm} />
            </Switch>
        </div >
    )
}
export default Servers;
