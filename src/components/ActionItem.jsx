import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const ActionItem = (props) => {
  const { href, name, color, size } = props
  return (
    <li>
      <Link href={ href }>
        <IconWrap color={ color } size={ size } >
          <FontAwesome name={ name } />
        </IconWrap>
      </Link>
    </li>
  )
}

const Link = styled.a`
  display: block;
  text-decoration: none;
`

const IconWrap = styled.div`
  display: flex;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background: rgba(255,255,255, 0.2);
  }
  span {
    color: ${(props) => props.color};
  }
`

export default ActionItem
