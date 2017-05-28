import React from 'react'
import styled from 'styled-components'

const FeedHashItem = (props) => {
  return (
    <Item>
      { props.title }
    </Item>
  )
}

const Item = styled.li`
  display: inline-block;
  font-size: 12px;
  color: #29404b;
  padding-top: 4px;
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`

export default FeedHashItem
