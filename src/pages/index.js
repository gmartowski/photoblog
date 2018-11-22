import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { createGlobalStyle } from 'styled-components'

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

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const Index = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <div>
      <h4>{pageCount} Posts</h4>

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
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </div>
  );
};
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
export default Index;
