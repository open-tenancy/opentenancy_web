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
    <section className='hero is-warning is-bold is-large'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <div id='maintitle'>
                    Welcome to 
                      <div id = 'companyname'>
                      openTenancy  
                        <button id="letschat" class="button ml-5  is-dark is-link  is-large is-rounded is-inverted is-full-width"><a id='letschatbutt' href="http://ec2-3-8-91-86.eu-west-2.compute.amazonaws.com/interview?i=docassemble.playground1%3Awelcome.yml#page1">Let's Chat</a></button>
                  </div>
                </div>
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
