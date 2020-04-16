import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Product = props => {
  const { name, image } = props
  return (
    <Card className="product-card my-2">
      <Card.Img variant="top" src={image} className="mb-0 product-card-image" />
      <Card.Body>
        <Card.Title className="mb-0" style={{ fontSize: 13 }}>
          {name}
        </Card.Title>
      </Card.Body>
      <Card.Footer className="py-0 pl-4 text-muted">2 days ago</Card.Footer>
    </Card>
  )
}

export default Product
