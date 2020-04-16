import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Product = props => {
  const { name, image } = props
  return (
    <Card style={{ maxWidth: "22%", minWidth: "22%" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{
          width: "100%",
          height: "230px",
        }}
        className="mb-0"
      />
      <Card.Body>
        <Card.Title style={{ fontSize: 14 }}>{name}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Product
