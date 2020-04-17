import React from "react"

const SaleAlert = () => {
  return (
    <div
      className="position-absolute text-white bg-danger p-2 m-2"
      style={{ zIndex: 1 }}
    >
      SALE!
    </div>
  )
}

export default SaleAlert
