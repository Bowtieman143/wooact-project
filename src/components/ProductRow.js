import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Product from "./Product"

const ProductRow = props => {
  const { label, productArray } = props
  return (
    <div className="my-5">
      <h2>{label}</h2>
      <Row>
        <Col className="d-flex flex-wrap justify-content-around">
          {productArray.map(({ node }, index) => (
            <Product
              key={index}
              id={node.id}
              name={node.name}
              image={node.images[0].src}
              description={node.description}
              price={node.price_html}
              isOnSale={node.on_sale}
            />
          ))}
        </Col>
      </Row>
    </div>
  )
}

export default ProductRow
