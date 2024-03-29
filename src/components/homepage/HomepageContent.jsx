import React, { Component } from 'react'
import styled from 'styled-components'

import HomepagePersonal from './HomepagePersonal'
import HomepageFeed from './HomepageFeed'

export class HomepageContent extends Component {
  render() {
    const data = {
      name: 'Ivan Egorov',
      skills: ['Ruby', 'Ruby on Rails', 'Elixir', 'Functional Programming', 'DevOps'],
      tags: ['#ruby', '#rails', '#ror', '#webdev', '#rack', '#web', '#backend']
    }
    return (
      <Wrap>
        <Banner />
        <Container>
          <PersonalWrap>
            <HomepagePersonal data={ data } />
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
  min-width: 780px;
  height: calc( 100vh - 70px );
  overflow-y: scroll;
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
  margin-top: -120px;
  padding: 0 10px;
`
const FeedWrap = styled.div`
  width: 60%;
  padding: 0 10px;
`

export default HomepageContent
