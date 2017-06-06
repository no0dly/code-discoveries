import React from 'react'

import styled from 'styled-components'

import HomepageFeedItem from '../homepage/HomepageFeedItem'

const FeedpageContent = (props) => {
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
    <div>
      <HomepageFeedItem data={ data } />
    </div>
  )
}

export default FeedpageContent
