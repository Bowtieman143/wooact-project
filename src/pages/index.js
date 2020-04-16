import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductRow from "../components/ProductRow"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container
        style={{ backgroundColor: "#111111" }}
        fluid
        className="justify-content-center text-center py-5"
      >
        <Row className="py-5">
          <Col>
            <img
              src={data.mainLogo.childImageSharp.fluid.src}
              alt="This is state fourty eight gear"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <ProductRow
          label="Collaboration Products"
          productArray={data.collabProducts}
        />
        <ProductRow
          label="Accessorie Products"
          productArray={data.accesoryProducts}
        />
        <ProductRow label="Men's Products" productArray={data.menProducts} />
        <ProductRow
          label="Women's Products"
          productArray={data.womenProducts}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    collabProducts: allWcProducts(
      limit: 8
      filter: { categories: { elemMatch: { name: { eq: "Collaboration" } } } }
    ) {
      edges {
        node {
          id
          wordpress_id
          name
          description
          price_html
          images {
            src
          }
          product_variations {
            regular_price
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
          description
          price_html
          images {
            src
          }
          product_variations {
            regular_price
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
          description
          price_html
          images {
            src
          }
          product_variations {
            regular_price
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
          description
          price_html
          images {
            src
          }
          product_variations {
            regular_price
          }
        }
      }
    }
    mainLogo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          src
        }
      }
    }
  }
`

export default IndexPage
