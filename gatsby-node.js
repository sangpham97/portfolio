const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allDatoCmsBlog {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.blogs.nodes.forEach(node => {
    createPage({
      path: `/Blogs/${node.slug}`,
      component: path.resolve(`src/templates/template-blog.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
