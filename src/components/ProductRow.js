import React, { Fragment } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Product from "./Product"

const ProductRow = props => {
  const { label, productArray } = props
  return (
    <div className="my-5">
      <h2>{label}</h2>
      <Row>
        <Col className="d-flex flex-wrap justify-content-between">
          {productArray.edges.map(({ node }, index) => (
            <Product name={node.name} image={node.images[0].src} />
          ))}
        </Col>
      </Row>
    </div>
  )
}

export default ProductRow
