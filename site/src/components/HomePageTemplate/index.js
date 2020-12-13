import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero testing-grad is-bold is-large' id="main_banner">
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-offset-1'>
              <div className='section'>

                <div className='maintitle'>
                  <div id='welcome-to' className="is-size-2">
                    Welcome to
                  </div>
                  <div id = 'companyname'>
                      openTenancy
                  </div>
                  <div id = "quote-message" className="is-size-3">
                    Problems with your landlord?
                  </div>

                </div>
              </div>
                <div class="centered">
                  <button id="letschat" class = "button2"><a href="http://ec2-18-133-124-236.eu-west-2.compute.amazonaws.com/interview?i=docassemble.openTenancy%3Adata%2Fquestions%2Fwelcome.yml#page1">Get Advice</a></button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                 <center>
                      <h3 className='has-text-weight-semibold is-size-2'>
                        {heading}
                      </h3>
                      <p>{description}</p>
                   </center>
                </div>
                <Offerings gridItems={offerings.blurbs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  })
}

export default HomePageTemplate
