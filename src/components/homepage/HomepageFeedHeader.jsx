import React, { Component } from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

export class HomepageFeedHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchExpanded: false,
      switcher: false
    }
  }

  toggleSearch(e) {
    e.preventDefault()

    this.setState(prevState => {
      return {
        searchExpanded: !prevState.searchExpanded
      }
    })
  }

  toggleSwitch() {
    this.setState(prevState => {
      return {
        switcher: !prevState.switcher
      }
    })
  }

  render() {
    const { searchExpanded } = this.state

    return (
      <Wrap>
        <Actions>
          <Link href="#">
            <FontAwesome name="sort-alpha-desc" />
            Сhronologic
          </Link>
          <ToggleWrap>
            <Toggle
              defaultChecked={ this.state.tofuIsReady }
              icons={ false }
              onChange={ this.handleTofuChange } />
            <span>Show card annotations</span>
          </ToggleWrap>
        </Actions>
        <Search>
          <SearchWrap searchExpanded={ searchExpanded }>
            <input type="search" placeholder="type something" />
          </SearchWrap>
          <Link href="#" onClick={ this.toggleSearch.bind(this) }>
            <FontAwesome name="search" />
          </Link>
        </Search>
      </Wrap>
    )
  }
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`

const Link = styled.a`
  color: #29404b;
  font-size: 14px;
  text-decoration: none;
  span {
    margin-right: 10px;
  }
`

const ToggleWrap = styled.a`
  margin-left: 20px;
  display: flex;
  align-items: center;

  .react-toggle-track {
    width: 36px;
    height: 17px;
    background: #ddd;
  }
  .react-toggle-thumb {
    width: 15px;
    height: 15px;
    border-color: #ddd;
  }
  .react-toggle--checked .react-toggle-thumb {
    left: 20px;
  }

  .react-toggle--focus .react-toggle-thumb {
    box-shadow: none;
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    box-shadow: none;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background: #ddd;
  }

  div.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background: #0099ff;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background: #ddd;
  }

  .react-toggle--checked .react-toggle-track {
    background: #0099ff;
  }
  .react-toggle--checked .react-toggle-thumb {
    border-color: #0099ff;
  }

  span {
    color: #29404b;
    font-size: 14px;
    margin-left: 10px
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
`

const Search = styled.div`
  display: flex;
  align-items: center;
`

const SearchWrap = styled.div`
  transition: 0.4s;
  width: ${props => props.searchExpanded ? '120px' : '0px'};
  margin-right: ${props => props.searchExpanded ? '20px' : '0px'};
  overflow: hidden;
  input {
    padding: 4px 4px;
    border-radius: 5px;
    border: 1px solid #ddd;
    color: #0099ff;
    width: 120px;
  }
`

export default HomepageFeedHeader
