import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    Link,
    hashHistory
} from 'react-router';

import App from '../components/App';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>

        </Route>
    </Router>
);
