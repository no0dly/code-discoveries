import React from 'react'
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router'

import App from '../components/App'
import Homepage from '../components/homepage/Homepage'
import Feedpage from '../components/feedpage/Feedpage'
import Newcard from '../components/newcard/Newcard'
import Settings from '../components/settings/Settings'

export default (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Homepage } />
      <Route path='feed' component={ Feedpage } />
      <Route path='new' component={ Newcard } />
      <Route path='settings' component={ Settings } />
    </Route>
  </Router>
)
