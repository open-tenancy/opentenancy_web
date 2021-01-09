import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'

const SponsorPageTemplate = ({
  title,
  meta_title,
  meta_description
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <div id = 'pageTitle'> Sponsors </div>
    <section className='section section--gradient'>
    <h3 className='has-text-weight-semibold is-size-4'> We rely on the generosity of Sponsors to help fund our server fees and other administrative costs. If you are interested in sponsoring us then <a href = '/contact'>get in touch</a>, we have a number of different sponsorship tiers for all levels of organisations.  </h3>
    <div className = 'spacing'>
      <h3 className='has-text-weight-semibold is-size-3'> <center> Platinum Sponsors </center> </h3>
      </div>
        <center><img src='/img/bamlegal.jpg' alt = 'bamLegal logo' id = 'SponsorLogo'/></center>
          <h3 id='sponsorName'><a href='https://www.bamlegal.co.uk/'> <center> BamLegal </center> </a></h3>

      <div className = 'spacing'>
      <h3 className='has-text-weight-semibold is-size-4'> <center> Interested in Sponsoring Us? </center> </h3>
      </div>
        <div class = "centered">
          <button id="contact" class = "button2"><a href="/contact">Get in Touch</a></button>
        </div>

    </section>
  </div>
)

SponsorPageTemplate.propTypes = {
  title: 'Sponsors',
  meta_title: PropTypes.string,
  meta_description: PropTypes.string
}

export default SponsorPageTemplate
