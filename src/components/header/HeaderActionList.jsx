import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import HeaderActionItem from './HeaderActionItem'

import * as actions from '../../actions'

export class HeaderActionList extends Component {
  toggleSearch(e) {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(actions.toogleSearch())
  }

  render() {
    return (
      <List>
        <HeaderActionItem onClick={ this.toggleSearch.bind(this) } name="search" href="#" />
        <HeaderActionItem name="bell" href="#" />
      </List>
    )
  }
}

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default connect()(HeaderActionList)
