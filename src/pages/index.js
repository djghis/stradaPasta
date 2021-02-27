import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/images/image"
import SEO from "../components/seo"
import MenuImage from "../components/menuImage"
import Logo from '../images/background-logo-cut.jpeg'

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
      {/* <img src={Logo} alt="Strada Logo" width="250" height="auto" display="block" margin-left="20%" margin-right="auto"/> */}
     <div className="home-speech">
        <p>Every morning our team of pastai prepare our handmade fresh pasta from la Nonna's recipe using free range Scottish eggs and a blend of flours imported from Italy.</p>
        <p>Because we believe everybody deserves a proper pasta we have also developed our signature vegan dough.</p>
        <p>Strada-Italian for street brings the best of italian cucina to your home.</p>
      </div>
      <div className="home-speech">
        <p>You can order your delivery or collection</p>
        <p>7 days a week 12pm to 11pm</p>
       
      </div>
      <Link to="/order-online" className="order-now-btn" >Order Now</Link>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`}}>
     
    
        {/* <MenuImage /> */}
      </div>
    </Layout>
  )
}

export default IndexPage
