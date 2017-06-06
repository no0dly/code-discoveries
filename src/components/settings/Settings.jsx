import React from 'react'
import Header from '../header/Header'
import { Link } from 'react-router'

import styled from 'styled-components'

const Settings = (props) => {
  return (
    <div>
      <Header title="Setting" />
      <Navigation>
        <NavItem to="/settings/" onlyActiveOnIndex activeClassName="active">
          Email
        </NavItem>
        <NavItem to="/settings/connections" activeClassName="active">
          Connections
        </NavItem>
        <NavItem to="/settings/security" activeClassName="active">
          Security
        </NavItem>
      </Navigation>
      <Container>
        {props.children}
      </Container>
    </div>
  )
}

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 40px;
`

const NavItem = styled(Link)`
  padding: 20px 0;
  margin: 0 10px;
  color: #29404b;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
  &:hover {
    color: #0099ff;
  }
  &.active {
    color: #0099ff;
    border-bottom: 2px solid #0099ff;
  }
`

const Container = styled.div`
  width: 780px;
  margin: 0 auto;
`

export default Settings
