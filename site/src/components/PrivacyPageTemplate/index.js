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
    <section className='section section--gradient'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='spacing section'>
              <p className = 'spacingPara'> Thank you for choosing to use the openTenancy website. This privacy policy explains how openTenancy ("us", "our", "we") protect your personal data rights. We are committed to protecting your right to privacy as well as your personal information. If you have any concerns about this please contact owner.opentenancy@gmail.com.</p>
              <div className = 'spacing has-text-weight-semibold is-size-3'> What information do we collect? </div>
              <div className = 'has-text-weight-semibold is-size-5'> Unidentifiable Information </div>
              <p className = 'spacingPara'> Certain information like what browser you are using and your Internet Protocol (IP) address, browser type, time of access, operating system, and referring site are collected automatically on our site as part of the Google Analytics tool. </p>
              <p className = 'spacingPara'> This information does not reveal your specific identity but instead data about your device and usage, including which pages you navigate to and how long you use the site for. We use this information to improve our website and ensure the best experience for our users.</p>
              <p className = 'spacingPara'>We use this information primarily to maintain our wbesite and for internal analytics.</p>
              <div className = 'has-text-weight-semibold is-size-5'> Personal Information </div>
              <p className = 'spacingPara'>When you input a form on our website and include your name and email address, we will store this information. No other personal information will be collected or stored with this.</p>
              <p className = 'spacingPara'>We will not be able to access or see your answers to the openTenancy interview, and we also won't be able to see the document generated as part of your interview process.</p>
              <div className = 'spacing has-text-weight-semibold is-size-3'> How do we use your information? </div>
              <p className = 'spacingPara'>We process your infromation for legitimate business interests purposes and in order to comply with our legal obligations.</p>
              <p className = 'spacingPara'>We use your personal information including name and email to respond to any questions or queries submitted to us through our contact form.</p>
                <div className = 'spacing has-text-weight-semibold is-size-3'> Do you use cookies? </div>
              <p className = 'spacingPara'>  We use cookies in order to store the answers to your questions when you are filling out the questionnaire temporarily. </p>
              <p className = 'spacingPara'>  We do not keep this data after you visit our site, and it is only stored in order to provide you with a list of questions we asked you along with your answers when you complete the questionnaire. </p>
              <div className = 'spacing has-text-weight-semibold is-size-3'> Third Parties Accessing your Personal Data </div>
              <p className = 'spacingPara'>  We do not sell or give your personal data to any third parties. We host our website on Netlify, who processes any submissions through the contact form. We also use Mailchimp to host sign ups for our newsletter. </p>
              <div className = 'spacing has-text-weight-semibold is-size-3'> Questions and concerns </div>
              <p className = 'spacingPara'>  If you have any queries in regards to this policy or you would like to exercise any of your personal data rights please contact owner.opentenancy@gmail.com. </p>
              <div className = 'spacing has-text-weight-semibold is-size-3'> Privacy Policy Updates </div>
              <div className = 'has-text-weight-semibold is-size-6'> This Privacy Policy was last updated January 12th, 2021. </div>
              <div className = 'has-text-weight-semibold is-size-6'> This Privacy Policy was created January 9th, 2021. </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
)

PrivacyPageTemplate.propTypes = {
  title: 'Privacy Policy',
  meta_title: PropTypes.string,
  meta_description: PropTypes.string
}

export default PrivacyPageTemplate
