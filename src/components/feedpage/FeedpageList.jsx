import React, { Component } from 'react'

import FeedpageItem from './FeedpageItem'

export class FeedpageList extends Component {
  renderFeedItem() {
    const feeds = [
      {
        name: 'Ivan Ivan',
        date: '12.02.2017',
        title: 'Background Segment Effect',
        description: 'I’d like to share a little decorative effect. The idea is to replicate boxes from a background with the same background image and make these boxes move, The idea is to replicate boxes from a background with the same background image and',
        ava: '',
        social: {
          like: 10,
          comments: 1,
          bookmark: 0,
          shared: 10
        }
      },
      {
        name: 'Ivan Ivan',
        date: '12.02.2017',
        title: 'Background Segment Effect',
        description: 'I’d like to share a little decorative effect. The idea is to replicate boxes from a background with the same background image and make these boxes move, The idea is to replicate boxes from a background with the same background image and',
        ava: '',
        social: {
          like: 10,
          comments: 1,
          bookmark: 0,
          shared: 10
        }
      },
      {
        name: 'Ivan Ivan',
        date: '12.02.2017',
        title: 'Background Segment Effect',
        description: 'I’d like to share a little decorative effect. The idea is to replicate boxes from a background with the same background image and make these boxes move, The idea is to replicate boxes from a background with the same background image and',
        ava: '',
        social: {
          like: 10,
          comments: 1,
          bookmark: 0,
          shared: 10
        }
      }
    ]
    return feeds.map((feed, idx) => {
      return <FeedpageItem { ...feed } key={ idx } />
    })
  }
  render() {
    return (
      <ul>
        { this.renderFeedItem() }
      </ul>
    )
  }
}

export default FeedpageList
