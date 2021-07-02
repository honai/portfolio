import React from "react"
import { Link, graphql } from "gatsby"

export default function BlogIndexPage({ data }) {
  const posts = data.allMarkdownRemark.nodes
  return (
    <div>
      <h1>blog</h1>
      <ol>
        {posts.map((post) => (
          <li>
            <Link to={`/blog${post.fields.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`
