import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'

const ContributePageTemplate = ({
  title,
  meta_title,
  meta_description
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <div id = 'pageTitle'> Contribute </div>

  </div>
)

ContributePageTemplate.propTypes = {
  title: 'Meet the Team',
  meta_title: PropTypes.string,
  meta_description: PropTypes.string
}

export default ContributePageTemplate
