import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function Template({ data }) {
  const post = data.markdownRemark
  console.log(post)
  return (
    <Layout>
      <Link to="/">Go back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <div>Posted by {post.frontmatter.author}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
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
