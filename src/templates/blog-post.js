import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Go back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <div>Posted by {post.frontmatter.author}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter:{ path: { eq: $path }}){
    html
    frontmatter {
      path
      title
      author
      date
    }
  }
}`
