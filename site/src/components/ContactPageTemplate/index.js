import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ContactForm } from '../forms'

const ContactPageTemplate = ({ title, subtitle, meta_title, meta_description }) => {
  return <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <div id = 'pageTitle'> Contact Us </div>
    <section className='section'>
      <div className='container'>
        <ContactForm />
      </div>
    </section>
  </div>
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default ContactPageTemplate
