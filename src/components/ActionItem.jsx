import React from 'react'
import styled from 'styled-components'

const ActionItem = (props) => {
  const { href, title } = props
  return (
    <li>
      <Link href={ href }>
        { title }
      </Link>
    </li>
  )
}

const Link = styled.a`
  diplay: block;
`

export default ActionItem
