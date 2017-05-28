import React, { Component } from 'react'
import ActionItem from './ActionItem'

import styled from 'styled-components'

export class ActionList extends Component {
  renderActions() {
    const { actions } = this.props

    return actions.map((link, idx) => {
      return <ActionItem name={ link.icon } key={ idx } href={ link.href } />
    })
  }
  render() {
    return (
      <List>
        { this.renderActions() }
      </List>
    )
  }
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

export default ActionList
