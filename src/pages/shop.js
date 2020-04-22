import React from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import ProductRow from "../components/ProductRow"
import Layout from "../components/layout"

const ShopPage = ({ data }) => {
  const products = data.allWcProducts

  return (
    <Layout>
      <Container>
        <ProductRow label="Some Products" productArray={products} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query getAllWcProducts {
    allWcProducts {
      edges {
        node {
          name
          id
          price_html
          images {
            src
          }
          on_sale
          description
        }
      }
    }
  }
`

export default ShopPage
