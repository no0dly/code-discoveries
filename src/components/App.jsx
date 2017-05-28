import React from 'react'
import styled from 'styled-components'

import Sidebar from './sidebar/Sidebar'

const App = (props) => {
  return (
    <Wrap>
      <SidebarWrap>
        <Sidebar />
      </SidebarWrap>
      <Content >
        {props.children}
      </Content>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`
const SidebarWrap = styled.div`
  width: 70px;
  height: 100vh;
  background: #0099ff;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 70px);
  height: 100vh;
  overflow-x: hidden;
`

export default App
