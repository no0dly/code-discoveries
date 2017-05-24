import React from 'react'
import { Link } from 'react-router'

import Sidebar from './Sidebar'

const App = (props) => {
  return (
    <div>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/feed">feed</Link></li>
        <li><Link to="/new">new</Link></li>
        <li><Link to="/settings">settings</Link></li>
      </ul>
      <Sidebar />
      {props.children}
    </div>
  )
}

export default App
