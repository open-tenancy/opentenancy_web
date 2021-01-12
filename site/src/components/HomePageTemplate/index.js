import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import PropTypes from 'prop-types'
import { withPrefix, Link} from "gatsby"

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
                  <div id='welcome-to'>
                    Welcome to
                  </div>
                  <div id = 'companyname'>
                      openTenancy
                  </div>
                    <Helmet>
                      <script src={withPrefix('quotes.js')} type="text/javascript"/>
                    </Helmet>
                </div>
              </div>
                <div class="centered">
                  <button id="letschat"><a href="/pricing">Get Advice</a></button>
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
                   </center>
                </div>
                <div class="columns is-vcentered">
                    <div class="column">
                      <center>
                        <div className = 'has-text-weight-semibold is-size-4' id = "centerColumn"> We eliminate all of the white noise. </div>
                      </center>
                    </div>
                    <div class="column">
                      <center>
                        <img src='/img/whitenoise.png' alt = 'use case diagram' id = "homePageimage"/>
                      </center>
                    </div>
                </div>
                <div class="columns is-vcentered">
                    <div class="column">
                      <center>
                          <img src='/img/law.png' alt = 'use case diagram' id = "homePageimage"/>
                      </center>
                    </div>
                    <div class="column">
                      <center>
                          <div className = 'has-text-weight-semibold is-size-4' id = "centerColumn"> Putting the law in the hands of the people who use it. </div>
                      </center>
                    </div>
                </div>
              </div>
              <center> <h3 className='has-text-weight-semibold is-size-2 spacing'> How does it work? </h3>
                <div className = 'has-text-weight-semibold is-size-4 ' id = "centerColumn"> Step one: Answer a questionnaire. </div>
                <div className = 'has-text-weight-semibold is-size-4 ' id = "centerColumn"> Step two: Receive a document summarising your tenancy rights. </div>
                <div className = 'spacing'>
                  <button id="adviceHome" class = "button2 spacing"><a href="/pricing">Get Advice</a></button>
                </div>
                <div className='spacing has-text-weight-semibold is-size-4'> It's Just. That. Easy. </div>
                <h3 className='has-text-weight-semibold is-size-2 spacing'> Who are we? </h3>
                <img src='/img/community.png' alt = 'use case diagram' id = "homePageimage"/>
                <div className='has-text-weight-semibold is-size-4'> We're a community of individuals frustrated by how confusing the law is. </div>
                <div className='has-text-weight-semibold is-size-4'> We want to make the law more accessible by summarising it in plain English. </div>
                <div className='has-text-weight-semibold is-size-4'> We don't provide binding legal advice, but instead a way to help you understand what you're already entitled to. </div>
                <div className = 'spacing'>
                  <button id="adviceHome" class = "button2 spacing"><a href="/about">FAQ</a></button>
                </div>
              </center>

              <h3 className='spacing has-text-weight-semibold is-size-2'> <center> Sponsored By </center> </h3>
              <center><a href = "https://www.bamlegal.co.uk"><img src='/img/bamlegal.jpg' alt = 'bamLegal logo' id = 'SponsorLogoHome'/></a></center>
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
