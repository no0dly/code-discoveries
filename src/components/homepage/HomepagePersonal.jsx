import React, { Component } from 'react'
import styled from 'styled-components'

import Avatar from '../Avatar'
import HomepageSocial from './HomepageSocial'
import HomepageStatistic from './HomepageStatistic'

export class HeaderContent extends Component {
  render() {
    return (
      <Wrap>
        <Avatar size="160" border="true" />

        <Title>
          <TitleText>
            Ivan Egorov
          </TitleText>
        </Title>

        <Subtitle>
          <SubtitleText>
            Filed of interests:
          </SubtitleText>
        </Subtitle>

        <Description>
          <DescriptionText>
            Ruby, Ruby on Rails, Elixir,
            Functional Programming, DevOps
          </DescriptionText>
        </Description>

        <Subtitle>
          <SubtitleText>
            Tags reading:
          </SubtitleText>
        </Subtitle>

        <Description>
          <DescriptionText>
            #ruby #rails #ror #webdev #rack #web #backend
          </DescriptionText>
        </Description>

        <HomepageSocialWrap>
          <HomepageSocial />
        </HomepageSocialWrap>
        <StatisticContainer>
          <StatisticWrap>
            <HomepageStatistic count="214" title="COOL CARDS" />
          </StatisticWrap>
          <StatisticWrap>
            <HomepageStatistic count="14" title="FOLLOWERS" />
          </StatisticWrap>
          <StatisticWrap>
            <HomepageStatistic count="14" title="FOLLOWING" />
          </StatisticWrap>
        </StatisticContainer>
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  width: 223px;
  text-align: center;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  margin-bottom: 10px;
`
const TitleText = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.29;
  color: #29404b;
`

const Subtitle = styled.div`
  margin-bottom: 5px;
`

const SubtitleText = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #0099ff;
`

const Description = styled.div`
  margin-bottom: 20px;
`

const DescriptionText = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.43;
  color: #29404b;
`

const HomepageSocialWrap = styled.div`
  margin-bottom: 20px;
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background: #29404b;
    opacity: 0.15;
    display: block;
    margin-top: 20px;
  }
`
const StatisticContainer = styled.div`
  display: flex;
`

const StatisticWrap = styled.div`
  width: 33.3%;
`

export default HeaderContent
