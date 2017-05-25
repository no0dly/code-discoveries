import React from 'react'
import styled from 'styled-components'

const Avatar = (props) => {
  return (
    <AvatarWrap size={ props.size }>
      <Image src="http://placekitten.com/g/200/200" />
    </AvatarWrap>
  )
}

const AvatarWrap = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: auto;
`

export default Avatar
