/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWcProducts {
        edges {
          node {
            id
            wordpress_id
            name
            description
            price_html
            slug
            images {
              src
            }
            on_sale
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const products = result.data.allWcProducts.edges

  // you'll call `createPage` for each result
  products.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `/product/${node.id}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/ProductPage.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        ...node,
        id: node.id,
        slug: node.slug,
        name: node.name,
        description: node.description,
        images: node.images,
        price: node.price_html,
        onSale: node.on_sale,
      },
    })
  })
}
