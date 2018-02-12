import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store/store.js';
import App from './components/App';

const history = createHistory()
const store = configureStore(history)

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
