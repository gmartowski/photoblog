import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { styled } from 'styled'

const styleSlugImage = styled.

export const Index = ({ data }) => {
  return (
    <Layout>
      <h1>this is blogpage</h1>
      {
        data.allMarkdownRemark.edges.map((post) => (
            <div key={post.node.id}>
              <h1>{post.node.frontmatter.title}</h1>
              <div>{post.node.frontmatter.date}</div>
              <div>{post.node.frontmatter.author}</div>
              <Img sizes={post.node.frontmatter.image.childImageSharp.sizes} />
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
          image {
                childImageSharp{
                    sizes(maxWidth: 630) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
				}
      }
    }
  }
}`

export default Index


