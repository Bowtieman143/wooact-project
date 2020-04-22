import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import ProductRow from "../components/ProductRow"
import Layout from "../components/layout"

const ShopPage = ({ data }) => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(10)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  useEffect(() => {
    const getProducts = () => {
      setProducts(data.allWcProducts.edges)
    }
    getProducts()
  }, [])

  return (
    <Layout>
      <Container>
        <ProductRow label="Some Products" productArray={currentProducts} />
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
