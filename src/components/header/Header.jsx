import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

import HeaderActionList from './HeaderActionList'
import Avatar from '../Avatar'

export class Header extends Component {
  render() {
    const { title, searchExpanded } = this.props

    return (
      <Wrap>
        <div>
          <Title>
            { title }
          </Title>
        </div>
        <Actions>
          <AddButtonWrap>
            <AddButton>
              <FontAwesome name="plus" />
              Add new card
            </AddButton>
          </AddButtonWrap>
          <SearchWrap searchExpanded={ searchExpanded } >
            <input type="search" placeholder="type something" />
          </SearchWrap>
          <HeaderActionList />
          <Avatar size="36" />
        </Actions>
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  padding: 17px 17px 17px 30px;
  box-shadow: 0 -8px 17px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.h2`
  font-family: OpenSans;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.29;
  color: #29404b;
`

const Actions = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const AddButtonWrap = styled.div`

`

const SearchWrap = styled.div`
  transition: 0.4s;
  width: ${props => props.searchExpanded ? '184px' : '0px'};
  margin-left: ${props => props.searchExpanded ? '30px' : '0'}
  overflow: hidden;
  input {
    padding: 6px 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    color: #0099ff;
  }
`

const AddButton = styled.button`
  color: #0099ff;
  background: none;
  border: 1px solid #0099ff;
  border-radius: 5px;
  font-size: 14px;
  padding: 6px 10px;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background: #0099ff;
  }
  span {
    margin-right: 10px;
    font-size: 12px;
  }
`

export default connect(
  (state) => {
    return {
      searchExpanded: state.searchExpanded
    }
  }
)(Header)
