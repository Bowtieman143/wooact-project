import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"

const ProductPage = props => {
  const { name, slug, description, images } = props.pageContext
  console.log(images)

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            {images.length > 0 ? <img src={images[0].src} alt={slug} /> : null}
          </Col>
          <Col>
            <h1 dangerouslySetInnerHTML={{ __html: name }}></h1>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            <Button variant="success">Buy Now!</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query defaultImage {
    file(relativePath: { eq: "default-product-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          src
        }
      }
    }
  }
`

export default ProductPage
