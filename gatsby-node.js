const path = require('path')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('src/templates/blog-post.js')

  return graphql(`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges{
            node{
              html  
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
  }
`).then(response => {
    if (response.errors) {
      return Promise.reject(response.errors)
    }

    createPaginatedPages({
      edges: response.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/posts.js',
      pageLength: 3,
      pathPrefix: "posts",
    })

    response.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })

}
