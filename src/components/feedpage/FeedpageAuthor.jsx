import React from 'react'

import styled from 'styled-components'

import Avatar from '../Avatar.jsx'

const FeedpageAuthor = (props) => {
  return (
    <Container>
      <AvaWrap>
        <Avatar size="36" />
      </AvaWrap>
      <Description>
        <Name>
          <NameText>
            Name
          </NameText>
        </Name>
        <Date>
          <DateText>
            Date
          </DateText>
        </Date>
      </Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const AvaWrap = styled.div`
  margin: 0 5px;
`

const Description = styled.div`
  margin: 0 5px;
`

const Name = styled.div`
  margin-bottom: 2px;
`

const NameText = styled.h4`
  font-size: 12px;
  font-weight: 600;
  color: #29404b;
`

const Date = styled.div`
  margin-bottom: 2px;
`

const DateText = styled.small`
  font-size: 12px;
  color: rgba(41, 64, 75, 0.25);
`

export default FeedpageAuthor
