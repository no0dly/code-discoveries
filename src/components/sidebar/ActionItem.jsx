import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router'

const ActionItem = (props) => {
  const { href, name, color, size } = props
  return (
    <Item>
      <Link to={ href } activeClassName="active">
        <IconWrap color={ color } size={ size } >
          <FontAwesome name={ name } />
        </IconWrap>
      </Link>
    </Item>
  )
}

const Item = styled.li`
  a {
    display: block;
    text-decoration: none;
    &.active span {
      color: #fff;
    }
  }

`

const IconWrap = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background: rgba(255,255,255, 0.2);
    span {
      transition: 0.3s;
      color: #fff;
    }
  }
  span {
    color: rgba(233, 240, 250, 0.25);
  }
`

export default ActionItem
