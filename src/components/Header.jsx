import React from 'react'
import styled from 'styled-components'

import ActionList from './ActionList'

const Header = (props) => {
  const { title } = props
  return (
    <Wrap>
      <div>
        <Title>
          {title}
        </Title>
      </div>
      <Actions>

      </Actions>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 17px 17px 17px 30px;
  box-shadow: 0 -8px 17px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.h2`
  font-family: OpenSans;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.29;
  color: #29404b;
`

const Actions = styled.div`
  font-size: 16px;
`

export default Header
