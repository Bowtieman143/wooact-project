import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

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
      <div className="bg-light sticky-top">
        <Container>
          <Row>
            <Col>
              <img
                src={data.file.childImageSharp.sizes.src}
                alt="help"
                className="ml-auto mr-auto my-0 d-block"
              />
            </Col>
          </Row>
        </Container>
        <Navbar className="p-0 pb-2 text-dark" bg="light" expand="lg">
          <Container className="text-center justify-content-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto mr-auto">
                <Nav.Link style={{ color: "#000000" }} href="/">
                  Home
                </Nav.Link>
                <NavDropdown
                  style={{ color: "#000000" }}
                  title="Shop"
                  id="basic-nav-dropdown"
                  href="/shop"
                >
                  <NavDropdown.Item href="/shop">Shop</NavDropdown.Item>
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
                <Nav.Link style={{ color: "#000000" }} href="#link">
                  Blog
                </Nav.Link>
                <Nav.Link style={{ color: "#000000" }} href="#link">
                  About Us
                </Nav.Link>
                <Nav.Link style={{ color: "#000000" }} href="#link">
                  Gift Cards
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )}
  />
)

export default MainNavbar
