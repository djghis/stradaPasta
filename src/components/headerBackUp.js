import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/background-logo-cut.jpeg'
import { graphql } from 'gatsby'

// import Img from 'gatsby-image'

const Header = ({ siteTitle }) => (
  <header
    // style={{
    //   background: `black`,
    //   // marginBottom: `1.45rem`,
    // }}
  >
  {/* <Img fluid={data.stradaLogo.childImageSharp.fluid} /> */}
  {/* <img  src={Logo} className="logo-strada" ></img> */}
    <div
      // style={{
      //   margin: `0 auto`,
      //   // maxWidth: 960,
      //   // padding: `1.45rem 1.0875rem`,
      //   verticalAlign: `middle`,
      // }}
    ><div className="logo"> <img  src={Logo} className="logo-strada" ></img></div>
   
      {/* <p style={{ margin: 0 }}> */}
      <nav className="menu">
        <Link
          to="/"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          //   margin: `auto`,
          // }}
        >
          {siteTitle}
        </Link>
        {/* </p> */}
        {/* <p style={{ margin: 0 }}> */}
        <Link
          to="/menus"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          //   padding: `1.45rem 1.0875rem`,
          // }}
        >
          Menus
        </Link>
        {/* </p> */}
        {/* <p style={{ margin: 0 }}> */}
        <Link
          to="/gallery"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          //   padding: `1.45rem 1.0875rem`,
          // }}
        >
          Gallery
        </Link>
        {/* </p> */}
        {/* <p style={{ margin: 0 }}> */}
        <Link
          to="/order-online"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          //   padding: `1.45rem 1.0875rem`,
          // }}
        >
          Order Online
        </Link>
        {/* // </p> */}
        {/* <p style={{ margin: 0 }}> */}
        <Link
          to="/catering-events"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          //   padding: `1.45rem 1.0875rem`,
          // }}
        >
          Catering and Events
        </Link>
         {/* </p> */}
        {/* <p style={{ margin: 0 }}> */}
        <Link
          to="/contact"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          //   padding: `1.45rem 1.0875rem`,
          // }}
        >
          Contact Us
        </Link>
        {/* // </p> */}
        </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    stradaLogo: file(relativePath: { eq: "background-logo.jpg" }) {
      ...fluidImage
    }
  }
`;

export default Header
