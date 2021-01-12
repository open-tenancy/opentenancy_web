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
    <section className='section section--gradient'>
      <h3 className='has-text-weight-semibold is-size-2'> Shape the Future of openTenancy </h3>
      <p className = 'spacingPara'> The best bit? No coding experience is needed to get involved. </p>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='section'>
                <center><img src='/img/github.png' alt = 'gettubg started with opentenancy'/></center>
                          <h3 className='spacing has-text-weight-semibold is-size-2'> How to Contribute </h3>
                            <div className='spacing'>
                                <p className = 'spacingPara'> There are two ways that you can contribute to the development of openTenancy: </p>
                                <ol>
                                    <li >Contribute decision trees/legal flow charts (no programming knowledge needed!)</li>
                                    <li>Contribute interviews coded in Docassemble</li>
                                </ol>
                              </div>
                            <h3 className='has-text-weight-semibold is-size-2'> Contribute Decision Trees </h3>
                            <center><img src='/img/decisiontrees.png' alt = 'legal decision trees'/></center>
                            <div className='spacing'>
                              <p className = 'spacingPara'> Absolutely no coding experience is needed to contribute decision trees or flowcharts. What we need is help turning the law in to flowcharts so that we can then code them up for our automated interview. </p>
                              <p className = 'spacingPara'> If this sounds like something you'd be interested in helping out with, then feel free to check out this <a href="https://www.youtube.com/watch?v=WOrE4B-eib4"> Youtube Tutorial </a> or go directly to our<a href = "https://github.com/open-tenancy/opentenancy_law"> Github page </a> to get started. </p>
                            </div>
                              <h3 className='spacing has-text-weight-semibold is-size-2'> Contribute Decision Trees </h3>
                              <p className = 'spacingPara'> If you have previous coding experience and you are willing to learn (or already know!) <a href = "https://docassemble.org/"> Docassemble</a>, then head to our <a href = "https://github.com/open-tenancy/opentenancy_docassemble"> Docassemble Github page</a> to start contributing. </p>

            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
)

ContributePageTemplate.propTypes = {
  title: 'Meet the Team',
  meta_title: PropTypes.string,
  meta_description: PropTypes.string
}

export default ContributePageTemplate
