import React, { Component } from 'react'
import styled from 'styled-components'

import FeedpageAuthor from './FeedpageAuthor'
// import FeedpageContent from './FeedpageContent'
import HomepageFeedItem from '../homepage/HomepageFeedItem'

export class FeedpageItem extends Component {
  render() {
    const data = {
      title: 'some title',
      hashes: [ '#ror', '#js', '#html' ],
      social: [
        {
          title: 'heart-o',
          count: 10
        },
        {
          title: 'comment-o',
          count: 10
        },
        {
          title: 'bookmark-o',
          count: 10
        },
        {
          title: 'share-alt',
          count: 10
        }
      ]
    }
    return (
      <Item>
        <WrapAuthor>
          <FeedpageAuthor />
        </WrapAuthor>
        <WrapContent>
          <HomepageFeedItem data={ data }/>
        </WrapContent>
      </Item>
    )
  }
}

const Item = styled.li`
  display: flex;
  border-bottom: 1px solid rgba(41, 64, 75, 0.2);
  padding: 30px 0;
`

const WrapAuthor = styled.div`
  width: 247px;
`

const WrapContent = styled.div`
  width: 533px;
  > div {
    border-bottom: none;
  }
`

export default FeedpageItem
