import React from 'react'
import styled from 'styled-components'

const Homepage = (props) => {
  return (
    <Wrap>
      <Count>
        <CountText>
          { props.count }
        </CountText>
      </Count>
      <Title>
        <TitleText>
          { props.title }
        </TitleText>
      </Title>
    </Wrap>
  )
}

const Wrap = styled.div`
  text-align: left;
`

const Count = styled.div`
  margin-bottom: 10px;
`

const CountText = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #29404b;
`

const Title = styled.div`
  margin-bottom: 10px;
  text-align: justify;
`

const TitleText = styled.p`
  font-size: 10px;
  color: #29404b;
`

export default Homepage
