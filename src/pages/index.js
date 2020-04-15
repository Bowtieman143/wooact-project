import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello world</h1>
      {data.allWcProducts.edges.map(({ node }, index) => (
        <div key={index}>
          <img src={node.images[0].src} width="300px" height="300px" />
          <p>{node.name}</p>
          <p>{node.sku}</p>
          <p>{node.weight}</p>
        </div>
      ))}
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allWcProducts(limit: 5) {
      edges {
        node {
          name
          on_sale
          sku
          weight
          images {
            src
          }
        }
      }
    }
  }
`

export default IndexPage
