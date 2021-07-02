import React from "react"
import { graphql, Link } from "gatsby"

export default function PostPage({ data, params }) {
  console.log(params, data)
  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div>
        <Link to="/blog/">BLOG</Link>
      </div>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
