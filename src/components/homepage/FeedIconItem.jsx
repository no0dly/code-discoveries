import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const FeedIconItem = (props) => {
  return (
    <IconWrap>
      <FontAwesome name={ props.title } />
      { props.count }
    </IconWrap>
  )
}

const IconWrap = styled.li`
  display: inline-block;
  font-size: 12px;
  color: #29404b;
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
  span {
    color: #0099ff;
    font-size: 16px;
    margin-right: 10px;
  }
`

export default FeedIconItem
