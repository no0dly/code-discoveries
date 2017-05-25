import React, { Component } from 'react'
import ActionItem from './ActionItem'

import styled from 'styled-components'

export class ActionList extends Component {
  renderActions() {
    const { actions, color } = this.props

    return actions.map((name, idx) => {
      return <ActionItem name={ name } key={ idx } href="#" color={ color } />
    })
  }
  render() {
    const { align } = this.props
    return (
      <List align={ align }>
        { this.renderActions() }
      </List>
    )
  }
}

const List = styled.ul`
  display: flex;
  flex-direction: ${props => props.align ? 'row' : 'column'};
`

export default ActionList
