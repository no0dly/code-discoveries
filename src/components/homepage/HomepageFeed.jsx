import React, { Component } from 'react'
import styled from 'styled-components'

import HomepageFeedHeader from './HomepageFeedHeader'
import HomepageFeedList from './HomepageFeedList'

export class HomepageFeed extends Component {
  render() {
    return (
      <Wrap>
        <HomepageFeedHeader />
        <HomepageFeedList />
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 520px;
`

export default HomepageFeed
