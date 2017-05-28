import React, { Component } from 'react'
import styled from 'styled-components'

import HomepageFeedItem from './HomepageFeedItem'

export class HomepageFeedList extends Component {
  render() {
    const data = [
      {
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
      },
      {
        title: 'second title',
        hashes: [ '#ror', '#js', '#html' ],
        social: [
          {
            title: 'heart-o',
            count: 20
          },
          {
            title: 'comment-o',
            count: 20
          },
          {
            title: 'bookmark-o',
            count: 20
          },
          {
            title: 'share-alt',
            count: 20
          }
        ]
      },
      {
        title: 'second title',
        hashes: [ '#ror', '#js', '#html' ],
        social: [
          {
            title: 'heart-o',
            count: 20
          },
          {
            title: 'comment-o',
            count: 20
          },
          {
            title: 'bookmark-o',
            count: 20
          },
          {
            title: 'share-alt',
            count: 20
          }
        ]
      },
      {
        title: 'second title',
        hashes: [ '#ror', '#js', '#html' ],
        social: [
          {
            title: 'heart-o',
            count: 20
          },
          {
            title: 'comment-o',
            count: 20
          },
          {
            title: 'bookmark-o',
            count: 20
          },
          {
            title: 'share-alt',
            count: 20
          }
        ]
      }
    ]

    const renderFeed = () => {
      return data.map((feed, idx) => {
        return <HomepageFeedItem data={ feed } key={ idx } />
      })
    }

    return (
      <List>
        { renderFeed() }
      </List>
    )
  }
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`

export default HomepageFeedList
