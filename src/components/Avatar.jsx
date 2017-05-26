import React from 'react'
import styled from 'styled-components'

const Avatar = (props) => {
  return (
    <AvatarWrap size={ props.size } border={ props.border }>
      <Image src="http://placekitten.com/g/200/200" />
    </AvatarWrap>
  )
}

const AvatarWrap = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  border: ${props => props.border ? '3px solid #fff' : 'none'};
`
const Image = styled.img`
  width: 100%;
  height: auto;
`

export default Avatar
