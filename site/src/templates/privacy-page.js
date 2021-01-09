import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PrivacyPageTemplate from '../components/PrivacyPageTemplate'
import Layout from '../components/Layout'

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PrivacyPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

PrivacyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PrivacyPage

export const privacyPageQuery = graphql`
  query privacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
