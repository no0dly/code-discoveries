import React, { Component } from 'react'
import styled from 'styled-components'

import FeedIconList from './FeedIconList'
import FeedHashList from './FeedHashList'

export class HomepageFeedItem extends Component {
  render() {
    const { title, hashes, social } = this.props.data

    return (
      <Item>
        <Title>
          <TitleText>
            { title }
          </TitleText>
        </Title>
        <Container>
          <Actions>
            <FeedIconList social={ social } />
          </Actions>
          <Hash>
            <FeedHashList hashes={ hashes } />
          </Hash>
        </Container>
        <Container>
          <Description>
            <DescriptionText>
              some text
            </DescriptionText>
          </Description>
        </Container>
        <ReadMore>
          <ReadMoreLink href="#">
            Read more
          </ReadMoreLink>
        </ReadMore>
      </Item>
    )
  }
}

const Item = styled.div`
  border-bottom: 1px solid rgba(41, 64, 75, 0.2);
  margin-bottom: 15px;
`

const Title = styled.div`
  margin-bottom: 17px;
`

const TitleText = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.29;
  color: #29404b;
`

const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
`

const Actions = styled.div`
  width: 50%;
`

const Hash = styled.div`
  width: 50%;
`

const Description = styled.div`
  width: 50%;
`

const DescriptionText = styled.div`
  width: 50%;
`

const ReadMore = styled.div`
  margin-bottom: 10px;
`

const ReadMoreLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #0099ff;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
  }
`

export default HomepageFeedItem
