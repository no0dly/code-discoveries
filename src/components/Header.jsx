import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

import ActionList from './ActionList'

const Header = (props) => {
  const { title } = props
  const actions = ['search', 'bell']

  return (
    <Wrap>
      <div>
        <Title>
          {title}
        </Title>
      </div>
      <Actions>
        <AddButtonWrap>
          <AddButton>
            <FontAwesome name="plus" />
            Add new card
          </AddButton>
        </AddButtonWrap>
        <ActionList actions={ actions } align="row" />
      </Actions>
    </Wrap>
  )
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
`
const AddButtonWrap = styled.div`

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

export default Header
