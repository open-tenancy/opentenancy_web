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
            <iframe id="docassemble" src="https://interview.opentenancy.co.uk/interview?i=docassemble.openTenancy%3Adata%2Fquestions%2Fwelcome.yml#page1" title="Open Tenancy"></iframe>
    </section>
    <div className = "centered spacing">
      <button id="contact" class = "button2"><a href="https://forms.gle/yZEHtkVmQ5bE64Ku7">Give us Feedback</a></button>
    </div>
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
