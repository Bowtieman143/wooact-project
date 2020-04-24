import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductRow from "../components/ProductRow"

const IndexPage = ({ data }) => {
  useEffect(() => {
    console.log("this is in the console")

    // let deferredPrompt

    window.addEventListener("beforeinstallprompt", e => {
      console.log("this is firing off")

      // // Prevent the mini-infobar from appearing on mobile
      // e.preventDefault()
      // // Stash the event so it can be triggered later.
      // deferredPrompt = e
      // // Update UI notify the user they can install the PWA
      // showInstallPromotion()
    })

    //   buttonInstall.addEventListener("click", e => {
    //     // Hide the app provided install promotion
    //     hideMyInstallPromotion()
    //     // Show the install prompt
    //     deferredPrompt.prompt()
    //     // Wait for the user to respond to the prompt
    //     deferredPrompt.userChoice.then(choiceResult => {
    //       if (choiceResult.outcome === "accepted") {
    //         console.log("User accepted the install prompt")
    //       } else {
    //         console.log("User dismissed the install prompt")
    //       }
    //     })
    //   })

    //   window.addEventListener("appinstalled", evt => {
    //     console.log("a2hs installed")
    //   })
  })
  return (
    <Layout>
      <SEO title="Home" />
      <Container
        style={{ backgroundColor: "#111111" }}
        fluid
        className="justify-content-center text-center py-5"
      >
        <Row className="py-5">
          <Col className="py-5">
            <img
              src={data.mainLogo.childImageSharp.fluid.src}
              alt="This is state fourty eight gear"
            />
          </Col>
        </Row>
      </Container>
      <Container className="">
        <ProductRow
          label="Collaboration Products"
          productArray={data.collabProducts.edges}
        />
        <ProductRow
          label="Accessorie Products"
          productArray={data.accesoryProducts.edges}
        />
        <ProductRow
          label="Men's Products"
          productArray={data.menProducts.edges}
        />
        <ProductRow
          label="Women's Products"
          productArray={data.womenProducts.edges}
        />
        <Row className="text-center">
          <Col>
            <Button variant="dark">Shop All Products</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    collabProducts: allWcProducts(
      limit: 8
      filter: { categories: { elemMatch: { name: { eq: "Collaboration" } } } }
    ) {
      edges {
        node {
          id
          wordpress_id
          name
          slug
          on_sale
          price_html
          images {
            src
          }
        }
      }
    }
    accesoryProducts: allWcProducts(
      limit: 8
      filter: { categories: { elemMatch: { name: { eq: "Accessories" } } } }
    ) {
      edges {
        node {
          id
          wordpress_id
          name
          slug
          on_sale
          price_html
          images {
            src
          }
        }
      }
    }
    menProducts: allWcProducts(
      limit: 8
      filter: { categories: { elemMatch: { name: { eq: "Men" } } } }
    ) {
      edges {
        node {
          id
          wordpress_id
          name
          slug
          on_sale
          price_html
          images {
            src
          }
        }
      }
    }
    womenProducts: allWcProducts(
      limit: 8
      filter: { categories: { elemMatch: { name: { eq: "Women" } } } }
    ) {
      edges {
        node {
          id
          wordpress_id
          name
          slug
          on_sale
          price_html
          images {
            src
          }
        }
      }
    }
    mainLogo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          src
        }
      }
    }
  }
`

export default IndexPage
