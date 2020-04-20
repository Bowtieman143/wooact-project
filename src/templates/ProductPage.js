import React, { useState, Fragment } from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
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
    attributes,
  } = props.pageContext
  const [viewedImage, setViewedImage] = useState(images[0].src)
  console.log(attributes)

  return (
    <Layout>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6}>
            {images.length > 0 ? (
              <Fragment>
                {onSale && <SaleAlert />}
                <img
                  src={viewedImage}
                  className="position-relative product-page-image"
                  alt={slug}
                />

                {images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image.src}
                    className="position-relative product-page-image-display mx-1"
                    alt={slug}
                    onClick={() => {
                      setViewedImage(image.src)
                    }}
                  />
                ))}
              </Fragment>
            ) : null}
            <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
              <Tab
                className="product-page-tabs-content"
                eventKey="1"
                title="Home"
              >
                <p>
                  jfkdsj lkk jkl fjdslk jdkl jfkdsj lkk jkl fjdslk jdkjfkdsj lkk
                  jkl fjdslk jdkjfkdsj lkk jkl fjdslk jdkjfkdsj lkk jkl fjdslk
                  jdkjfkdsj lkk jkl fjdslk jdkjfkdsj lkk jkl fjdslk jdkjfkdsj
                  lkk jkl fjdslk jdkjfkdsj lkk jkl fjdslk jdkjfkdsj lkk jkl
                  fjdslk jdkjfkdsj lkk jkl fjdslk jdk
                </p>
              </Tab>
              <Tab
                className="product-page-tabs-content"
                eventKey="2"
                title="Profile"
              >
                <p>jfkdsj lkk jkl fjdslk jdkl</p>
              </Tab>
              <Tab
                className="product-page-tabs-content"
                eventKey="3"
                title="Contact"
              >
                <p>jfkdsj lkk jkl fjdslk jdkl</p>
              </Tab>
            </Tabs>
          </Col>
          <Col className="py-4">
            <h2 dangerouslySetInnerHTML={{ __html: name }}></h2>
            <h3 dangerouslySetInnerHTML={{ __html: price }}></h3>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            {attributes.length > 0 && (
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Sizes</Form.Label>
                  <Form.Control as="select">
                    <option>Select a size</option>
                    {attributes[0].options.map((option, idx) => (
                      <option key={idx}>{option}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
            )}
            <Button variant="success">Buy Now!</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ProductPage
