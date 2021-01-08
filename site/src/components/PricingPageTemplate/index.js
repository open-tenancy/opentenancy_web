import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'

const PricingPageTemplate = ({
  title,
  meta_title,
  meta_description,
  pricing,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <div id = 'pageTitle'> Get Advice </div>
    <section className='section section--gradient' id='docassemble-section'>
            <iframe id="docassemble" src="http://ec2-18-133-124-236.eu-west-2.compute.amazonaws.com/interview?i=docassemble.base%3Adata%2Fquestions%2Fdefault-interview.yml#page1" title="Open Tenancy"></iframe>
    </section>
  </div>
)

PricingPageTemplate.propTypes = {
  title: 'Get Advice',
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

export default PricingPageTemplate
