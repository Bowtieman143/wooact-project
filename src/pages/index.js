import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  const [count, setCount] = useState(0)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello world</h1>
      <ul>
        {data.allWordpressWpProduct.edges.map(({ node }, index) => (
          <li key={index}>
            <p>{node.title}</p>
          </li>
        ))}
      </ul>
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
    allWordpressWpProduct {
      edges {
        node {
          id
          title
          type
        }
      }
    }
  }
`

export default IndexPage
