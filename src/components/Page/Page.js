import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PropTypes from 'prop-types'

import Headline from '../Article/Headline'
import Bodytext from '../Article/Bodytext'

const Page = props => {
  const {
    page: {
      body,
      frontmatter: { title },
    },
    theme,
  } = props

  return (
    <React.Fragment>
      <header>
        <Headline title={title} theme={theme} />
      </header>
      <Bodytext body={body} theme={theme} />
    </React.Fragment>
  )
}

Page.propTypes = {
  page: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default Page
