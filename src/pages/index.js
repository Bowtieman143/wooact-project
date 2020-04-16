import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/Product"

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h2>Collaboration Products</h2>
        <Row>
          <Col className="d-flex flex-wrap justify-content-between">
            {data.collabProducts.edges.map(({ node }, index) => (
              <Product name={node.name} image={node.images[0].src} />
            ))}
          </Col>
        </Row>
        <h2>Accessories</h2>
        <Row>
          <Col className="d-flex flex-wrap justify-content-between">
            {data.accesoryProducts.edges.map(({ node }, index) => (
              <Product name={node.name} image={node.images[0].src} />
            ))}
          </Col>
        </Row>
        <h2>Men Products</h2>
        <Row>
          <Col className="d-flex flex-wrap justify-content-between">
            {data.menProducts.edges.map(({ node }, index) => (
              <Product name={node.name} image={node.images[0].src} />
            ))}
          </Col>
        </Row>
        <h2>Women Products</h2>
        <Row>
          <Col className="d-flex flex-wrap justify-content-between">
            {data.womenProducts.edges.map(({ node }, index) => (
              <Product name={node.name} image={node.images[0].src} />
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    collabProducts: allWcProducts(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "Collaboration" } } } }
    ) {
      edges {
        node {
          id
          wordpress_id
          name
          images {
            src
          }
        }
      }
    }
    accesoryProducts: allWcProducts(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "Accessories" } } } }
    ) {
      edges {
        node {
          id
          wordpress_id
          name
          images {
            src
          }
        }
      }
    }
    menProducts: allWcProducts(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "Men" } } } }
    ) {
      edges {
        node {
          id
          wordpress_id
          name
          images {
            src
          }
        }
      }
    }
    womenProducts: allWcProducts(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "Women" } } } }
    ) {
      edges {
        node {
          id
          wordpress_id
          name
          images {
            src
          }
        }
      }
    }
  }
`

export default IndexPage
