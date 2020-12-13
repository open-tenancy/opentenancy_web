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
    <section className='hero testing-grad is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                  <div id='maintitle' className="section-title">
                  {title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
    <div className = 'spacing'>
      <h3 className='has-text-weight-semibold is-size-2'> <center> Platinum Sponsors </center> </h3>
      </div>
        <center><img src='/img/bamlegal.jpg' alt = 'bamLegal logo' id = 'SponsorLogo'/></center>
          <h3 id='sponsorName'><a href='https://www.bamlegal.co.uk/'> <center> BamLegal </center> </a></h3>

      <div className = 'spacing'>
      <h3 className='has-text-weight-semibold is-size-2'> <center> Interested in Sponsoring Us? </center> </h3>
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
