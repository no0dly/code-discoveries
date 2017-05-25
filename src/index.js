import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import router from './router'

import 'reset-css'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
  <Provider>
    {router}
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
