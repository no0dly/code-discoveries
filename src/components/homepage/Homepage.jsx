import React from 'react'

import Header from '../header/Header'
import HomepageContent from './HomepageContent'

const Homepage = (props) => {
  return (
    <div>
      <Header title="Account" />
      <HomepageContent />
    </div>
  )
}

export default Homepage
