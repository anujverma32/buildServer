import React from 'react'
import { Route, Switch } from 'react-router';
import ServerForm from './ServerForm';
import ServersList from './ServerList';

const Servers = (props) => {
    return (
        <div className="settings-container" >
            <Switch>
                <Route exact path="/servers" component={ServersList} />
                <Route exact path="/servers/new" render={(props) => (
                    <ServerForm {...props} data={{new : true}} />
                )} />
                <Route path="/servers/:id" component={ServerForm} />
            </Switch>
        </div >
    )
}
export default Servers;
