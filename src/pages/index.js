import React from "react"
import { graphql } from "gatsby"

import Bio from "@components/Bio/Bio"
import Layout from "@components/Layout/Layout"
import SEO from "@components/seo"
import Post from "@components/Post"
import Divider from "@components/Divider/Divider"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Bio />
      {posts.map(({ node }, index) => (
        <React.Fragment key={node.fields.slug}>
          <Post node={node}></Post>
          {posts.length - 1 > index && <Divider />}
        </React.Fragment>
      ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
