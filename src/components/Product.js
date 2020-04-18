import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import SaleAlert from "./SaleAlert"

const Product = props => {
  const { name, image, price, isOnSale, id } = props
  return (
    <Card className="product-card my-2">
      {isOnSale && <SaleAlert />}
      <Card.Img
        variant="top"
        src={image}
        className="mb-0 product-card-image position-relative"
      />
      <Card.Body>
        <Card.Title
          className="mb-0"
          style={{ fontSize: 13, fontWeight: "400" }}
          dangerouslySetInnerHTML={{ __html: name }}
        ></Card.Title>
        <Card.Title
          className="mt-2 mb-0"
          style={{ fontSize: 14, fontWeight: "200" }}
          dangerouslySetInnerHTML={{ __html: price }}
        ></Card.Title>
        <Card.Text></Card.Text>
        <Link to={`/product/${id}`}>View Product</Link>
      </Card.Body>
    </Card>
  )
}

export default Product
