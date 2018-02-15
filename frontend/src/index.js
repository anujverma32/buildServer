import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './stores/store.js';
import App from './containers/App';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';


const history = createHistory()
const store = configureStore(history)

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/login/" component={Login} />
                <PrivateRoute path="/" component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
