import React, { Component } from 'react'
import styled from 'styled-components'

import HomepagePersonal from './HomepagePersonal'
import HomepageFeed from './HomepageFeed'

export class HeaderContent extends Component {
  render() {
    return (
      <Wrap>
        <Banner />
        <Container>
          <PersonalWrap>
            <HomepagePersonal />
          </PersonalWrap>
          <FeedWrap>
            <HomepageFeed />
          </FeedWrap>
        </Container>
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Banner = styled.div`
  height: 200px;
  width: 100%;
  background-image: url("./banner2.jpg"), linear-gradient(to bottom, rgba(0, 201, 255, 0.57), rgba(0, 153, 255, 0));
  background-size: cover;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const PersonalWrap = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  margin-top: -90px;
  padding: 0 10px;
`
const FeedWrap = styled.div`
  width: 60%;
  padding: 0 10px;
`

export default HeaderContent
