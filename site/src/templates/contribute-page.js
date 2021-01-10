import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ContributePageTemplate from '../components/ContributePageTemplate'
import Layout from '../components/Layout'

const ContributePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContributePageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ContributePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContributePage

export const contributePageQuery = graphql`
  query ContributePage($id: String!) {
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
