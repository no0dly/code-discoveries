import React, { Component } from 'react'
import ActionItem from './ActionItem'

export class ActionList extends Component {
  render() {
    return (
      <ul>
        <ActionItem img="" title="login" href="/" />
      </ul>
    )
  }
}

export default ActionList
