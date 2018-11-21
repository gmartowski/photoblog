import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { createGlobalStyle } from 'styled-components'
import { Heading } from '../components/heading'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin:0;
  padding:0;
}

body {
  font-family: 'Montserrat', sans-serif;
}
`

const SlugImage = styled(Img)`
  max-width: 100px;
`;

const Index = ({ data }) => {
  return (
    <Layout>
      <Heading>Mój blog o fotografii cyfrowej</Heading>
      {
        data.allMarkdownRemark.edges.map((post) => (
            <div key={post.node.id}>
              <GlobalStyle />
              <h1>{post.node.frontmatter.title}</h1>
              <div>{post.node.frontmatter.date}</div>
              <div>{post.node.frontmatter.author}</div>
              <SlugImage sizes={post.node.frontmatter.slug.childImageSharp.sizes} />
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
                    sizes(maxWidth: 100) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
            slug {
                childImageSharp{
                    sizes(maxWidth: 100) {
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


