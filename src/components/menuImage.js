import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const MenuImage = () => {
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
        <div>
            <Img fluid={data.menu.childImageSharp.fluid} alt="Strada full menu"/>
        </div>
    )
}

export default MenuImage