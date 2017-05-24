import React from 'react'
import styled from 'styled-components'

import ActionList from './ActionList'

const Header = (props) => {
  const { title } = props
  return (
    <div>
      This is header
      <Title>
        <TitleText>
          {title}
        </TitleText>
      </Title>
      <Actions>
        <ActionList />
      </Actions>
    </div>
  )
}

const Title = styled.div`
  margin-bottom: 20px;
`

const TitleText = styled.h2`
  font-size: 16px;
`

const Actions = styled.div`
  font-size: 16px;
`

export default Header
