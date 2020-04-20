import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SaleAlert from "../components/SaleAlert"

const ProductPage = props => {
  const {
    name,
    slug,
    description,
    images,
    price,
    onSale,
    id,
  } = props.pageContext

  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            {images.length > 0 && (
              <>
                {onSale && <SaleAlert />}
                <img
                  src={images[0].src}
                  className="position-relative product-page-image"
                  alt={slug}
                />
              </>
            )}
            <div>
              {images.map(image => (
                <img
                  key={images.src}
                  src={image.src}
                  className="position-relative product-page-image-display mx-1"
                  alt={slug}
                />
              ))}
            </div>
          </Col>
          <Col className="py-4">
            <h2 dangerouslySetInnerHTML={{ __html: name }}></h2>
            <h3 dangerouslySetInnerHTML={{ __html: price }}></h3>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            <Button variant="success">Buy Now!</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ProductPage
