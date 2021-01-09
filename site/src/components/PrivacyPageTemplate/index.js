import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'

const PrivacyPageTemplate = ({
  title,
  meta_title,
  meta_description
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <div id = 'pageTitle'> Privacy Policy </div>
    <p> Thank you for choosing to use the openTenancy website. We are committed to protecting your right to privacy as well as your personal information. If you have any concerns about this please contact owner.opentenancy@gmail.com.</p>
    <div className = 'has-text-weight-semibold is-size-3'> What information do we collect? </div>
    <p> Certain information like what browser you are using and your Internet Protocol (IP) address are collected automatically on our site as part of the Google Analytics tool. </p>
    <p> This information does not reveal your specific identity but instead data about your device and usage, including which pages you navigate to and how long you use the site for. We use this information to improve our website and ensure the best experience for our users.</p>
    <p>We use this information primarily to maintain our wbesite and for internal analytics.</p>
    <div className = 'has-text-weight-semibold is-size-3'> How do we use your information? </div>
    <p>We process your infromation for legitimate business interests purposes and in order to comply with our legal obligations.</p>
      <div className = 'has-text-weight-semibold is-size-3'> Do you use cookies? </div>
    <p>  We use cookies in order to store the answers to your questions when you are filling out the questionnaire. </p>
    <p> We do not keep this data after you visit our site, and it is only stored in order to provide you with a list of questions we asked you along with your answers when you complete the questionnaire. </p>

    <p> </p>
    <div className = 'has-text-weight-semibold is-size-6'> This Privacy Policy was last updated January 9th, 2021. </div>
  </div>
)

PrivacyPageTemplate.propTypes = {
  title: 'Privacy Policy',
  meta_title: PropTypes.string,
  meta_description: PropTypes.string
}

export default PrivacyPageTemplate
