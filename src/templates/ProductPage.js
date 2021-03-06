import React, { useState, Fragment } from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
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

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Layout>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6}>
            {images.length > 0 ? (
              <Fragment>
                <Modal
                  show={show}
                  onHide={handleClose}
                  animation={false}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Body className="p-0 m-0">
                    <img src={viewedImage} className="m-0" alt={slug} />
                  </Modal.Body>
                </Modal>

                {onSale && <SaleAlert />}
                <img
                  src={viewedImage}
                  className="position-relative product-page-image"
                  alt={slug}
                  onClick={handleShow}
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
            <Form>
              {attributes.length > 0 && (
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Sizes</Form.Label>
                  <Form.Control as="select">
                    <option>Select a size</option>
                    {attributes[0].options.map((option, idx) => (
                      <option key={idx}>{option}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              )}
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Ammount</Form.Label>
                <Form.Control type="number" placeholder="1" />
              </Form.Group>
            </Form>
            <Button variant="success">Buy Now!</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ProductPage
