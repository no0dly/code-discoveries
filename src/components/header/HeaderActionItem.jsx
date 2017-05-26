import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const HeaderActionItem = (props) => {
  const { href, name, onClick } = props

  const onClickHandler = (e) => {
    onClick(e)
  }

  return (
    <Item>
      <Link onClick={ onClickHandler.bind(this) } href={ href }>
        <IconWrap >
          <FontAwesome name={ name } />
        </IconWrap>
      </Link>
    </Item>
  )
}

const Item = styled.li`
  margin-left: 30px;
  &:last-child {
    margin-right: 30px;
  }
`
const Link = styled.a`
  display: block;
  text-decoration: none;
  &:hover span,
  &:focus span {
    color: #0099ff;
  }
`

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background: rgba(255,255,255, 0.2);
  }
  span {
    color: #ddd;
    transition: 0.3s;
  }
`

export default HeaderActionItem
