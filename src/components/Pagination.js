import React from "react"

const Pagination = ({ productsPerPage, totalProducts }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  return <div></div>
}

export default Pagination
