import React from "react"
import Card from "react-bootstrap/Card"

const Product = props => {
  const { name, image, price } = props
  return (
    <Card className="product-card my-2">
      <Card.Img variant="top" src={image} className="mb-0 product-card-image" />
      <Card.Body className="p-2">
        <Card.Title
          className="mb-0"
          style={{ fontSize: 13, fontWeight: "400" }}
        >
          {name}
        </Card.Title>
        <Card.Title
          className="mt-2 mb-0"
          style={{ fontSize: 14, fontWeight: "200" }}
          dangerouslySetInnerHTML={{ __html: price }}
        ></Card.Title>
      </Card.Body>
      {/* <Card.Footer className="py-0 pl-4 text-muted">2 days ago</Card.Footer> */}
    </Card>
  )
}

export default Product
