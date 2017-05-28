import React from 'react'
import styled from 'styled-components'

import FeedHashItem from './FeedIconItem'

const FeedHashList = (props) => {
  const { hashes } = props

  const renderHashes = () => {
    return hashes.map((hash, idx) => {
      return <FeedHashItem title={ hash } key={ idx } />
    })
  }

  return (
    <List>
      { renderHashes() }
    </List>
  )
}

const List = styled.ul`
  display: inline-block;
`

export default FeedHashList
