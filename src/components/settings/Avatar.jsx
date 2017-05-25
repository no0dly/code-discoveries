import React from 'react'
import styled from 'styled-components'

const Avatar = (props) => {
  return (
    <AvatarWrap>
      <Image src="http://placekitten.com/300/300" />
    </AvatarWrap>
  )
}

const AvatarWrap = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: auto;
`

export default Avatar
