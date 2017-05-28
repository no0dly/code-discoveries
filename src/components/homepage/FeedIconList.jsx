import React from 'react'
import styled from 'styled-components'

import FeedIconItem from './FeedIconItem'

const FeedIconList = (props) => {
  const { social } = props

  const renderIcons = () => {
    return social.map((icon, idx) => {
      return <FeedIconItem title={ icon.title } count={ icon.count } key={ idx } />
    })
  }

  return (
    <List>
      { renderIcons() }
    </List>
  )
}

const List = styled.ul`
  display: inline-block;
`

export default FeedIconList
