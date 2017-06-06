import React from 'react'
import Header from '../header/Header'
import FeedpageList from './FeedpageList'

import styled from 'styled-components'

const Feedpage = (props) => {
  return (
    <div>
      <Header title="Feed" />
      <Container>
        <FeedpageList />
      </Container>
    </div>
  )
}

const Container = styled.ul`
  width: 780px;
  margin: 0 auto;
  padding-top: 30px;
`

export default Feedpage
