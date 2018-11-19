const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve('src/templates/blog-post.js')

  return graphql(`
  {
    allMarkdownRemark{
      edges{
        node{
          html  
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
  }
`).then(response => {
    if (response.errors) {
      return Promise.reject(response.errors)
    }

    response.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })

}
