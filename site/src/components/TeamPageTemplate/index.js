import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'

const TeamPageTemplate = ({
  title,
  meta_title,
  meta_description
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <div id = 'pageTitle'> Meet the Team </div>
    <div  className="columns is-multiline">
      <div class="column is-one-third">
          <p className='has-text-centered'>
            <img alt='' src='/img/amy.jpeg'/>
                <p><a href = 'https://www.linkedin.com/in/amy-conroy/'>Amy Conroy</a></p>
                <p>Co-Founder</p>
          </p>
        </div>
        <div class="column is-one-third">
            <p className='has-text-centered'>
              <img alt='' src='/img/ana.jpeg'/>
                  <p><a href = 'https://www.linkedin.com/in/ana-shmyglya-894095167/'>Ana Shmyglya</a></p>
                  <p>Co-Founder</p>
            </p>
          </div>
          <div class="column is-one-third">
              <p className='has-text-centered'>
                <img alt='' src='/img/joe.jpg'/>
                    <p><a href = 'https://www.linkedin.com/in/joseph-link-3902261b9/'>Joe Link</a></p>
                    <p>Content Manager</p>
              </p>
          </div>
    </div>
  </div>
)

TeamPageTemplate.propTypes = {
  title: 'Meet the Team',
  meta_title: PropTypes.string,
  meta_description: PropTypes.string
}

export default TeamPageTemplate
