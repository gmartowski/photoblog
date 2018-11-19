import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

export const Blog = ({ data }) => {
  return (
    <Layout>
      <h1>this is blogpage</h1>
      {
        data.allMarkdownRemark.edges.map((post) => (
            <div key={post.node.id}>
              <h1>{post.node.frontmatter.title}</h1>
              <div>{post.node.frontmatter.date}</div>
              <div>{post.node.frontmatter.author}</div>
              <Link to={post.node.frontmatter.path}>Read More</Link>
            </div>
          ),
        )
      }
    </Layout>
  )
}

export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark{
    edges{
      node{
      id
        frontmatter {
          path
          date
          title
          author
				}
      }
    }
  }
}`

export default Blog


