import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import SaleAlert from "./SaleAlert"

const Product = props => {
  const { name, image, price, isOnSale, id } = props
  return (
    <Card className="product-card my-1">
      <Link to={`/product/${id}`} className="text-dark">
        {isOnSale && <SaleAlert />}
        <Card.Img
          variant="top"
          src={image}
          className="mb-0 product-card-image position-relative"
        />
        <Card.Body className="p-3">
          <Card.Title
            className="text-dark mb-0"
            style={{ fontSize: 13, fontWeight: "400" }}
            dangerouslySetInnerHTML={{ __html: name }}
          ></Card.Title>
          <Card.Title
            className="text-muted mt-2 mb-0"
            style={{ fontSize: 14, fontWeight: "400" }}
            dangerouslySetInnerHTML={{ __html: price }}
          ></Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default Product
