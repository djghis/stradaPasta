import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import MenuImage from "../components/menuImage"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query  {
    menu: file(relativePath: {eq: "menu.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Every morning our team of pastai prepare, from la nonna’s receipe, our handmade fresh pasta using free range scottish eggs and a blend of flours imported from italy. Because we believe everybody deserves a proper pasta we’ve also developed our signature vegan/gluten free dough.  

Strada-italian for street-brings the best of Italian cucina to your home. 

Buon appetito</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`}}>
     
    
        <MenuImage />
      </div>
    </Layout>
  )
}

export default IndexPage
