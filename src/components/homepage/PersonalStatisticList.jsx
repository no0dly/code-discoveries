import React from 'react'
import styled from 'styled-components'

import PersonalStatisticItem from './PersonalStatisticItem'

const PersonalStatisticList = (props) => {
  return (
    <Container>
      <StatisticWrap>
        <PersonalStatisticItem count="214" title="COOL CARDS" />
      </StatisticWrap>
      <StatisticWrap>
        <PersonalStatisticItem count="14" title="FOLLOWERS" />
      </StatisticWrap>
      <StatisticWrap>
        <PersonalStatisticItem count="14" title="FOLLOWING" />
      </StatisticWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const StatisticWrap = styled.div`
  width: 33.3%;
`
export default PersonalStatisticList
