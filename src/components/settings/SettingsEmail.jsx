import React, { Component } from 'react'
import styled from 'styled-components'

export class SettingsEmail extends Component {
  render() {
    return (
      <Wrap>
        <List>
          <Item>
            <Option>
              <Title>
                <TitleText>
                  Your email address
                </TitleText>
              </Title>
              <SubTitle>
                <SubTitleText>
                  slothcardsuser@email.com
                </SubTitleText>
              </SubTitle>
            </Option>
            <div>
              slider
            </div>
          </Item>
        </List>
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  display: flex;
`

const List = styled.div`
  width: 100%;
`

const Item = styled.li`
  display: flex;
`

const Option = styled.div`
  width: 80%;
`

const Title = styled.div`
  margin-bottom: 10px
`

const TitleText = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #29404b;
`

const SubTitle = styled.div`
  margin-bottom: 10px
`

const SubTitleText = styled.h4`
  font-size: 12px;
  font-weight: 600;
  color: rgba(41, 64, 75, 0.25);
`

export default SettingsEmail
