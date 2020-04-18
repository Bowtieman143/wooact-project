import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"

const MainNavbar = () => (
  <StaticQuery
    query={graphql`
      query MyNewQuery {
        file(relativePath: { eq: "logo-sm.png" }) {
          childImageSharp {
            sizes(maxWidth: 50) {
              src
            }
          }
        }
      }
    `}
    render={data => (
      <Navbar className="sticky-top p-0 pb-2" bg="light" expand="lg">
        <Container className="text-center justify-content-center">
          <Navbar.Brand href="#home" className="m-0 d-block">
            <img
              src={data.file.childImageSharp.sizes.src}
              alt="help"
              className="m-0 d-block"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )}
  />
)

export default MainNavbar
