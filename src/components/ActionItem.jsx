import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const ActionItem = (props) => {
  const { href, name, color } = props

  return (
    <li>
      <Link href={ href } color={ color }>
        <FontAwesome name={ name } />
      </Link>
    </li>
  )
}

const Link = styled.a`
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background: rgba(255,255,255, 0.2);
  }
  span {
    color: ${(props) => props.color};
  }
`

export default ActionItem
