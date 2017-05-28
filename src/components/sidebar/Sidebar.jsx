import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

import ActionList from './ActionList'

import Logo from '../../logo.png'

const Sidebar = (props) => {
  const topActionList = [
    {
      icon: 'code',
      href: '/feed'
    },
    {
      icon: 'bookmark',
      href: '/settings'
    },
    {
      icon: 'clock-o',
      href: '/new'
    },
    {
      icon: 'star-o',
      href: '/new'
    }
  ]
  const botActionList = [
    {
      icon: 'cog',
      href: '/settings'
    },
    {
      icon: 'sign-out',
      href: '/log-out'
    }
  ]

  return (
    <Wrap>
      <div>
        <LogoWrap>
          <Link to="/">
            <Image src={ Logo } alt="logo" />
          </Link>
        </LogoWrap>
        <ActionList actions={ topActionList } color="#fff" itemSize="70" />
      </div>
      <div>
        <ActionList actions={ botActionList } color="#fff" itemSize="70" />
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const LogoWrap = styled.div`
  a {
    width: 30px;
    height: 30px;
    padding: 20px;
    display: block;
  }
`
const Image = styled.img`
  width: 100%;
  height: auto;
`

export default Sidebar
