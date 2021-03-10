import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Instagram from "../components/instagram"

const Gallery = () => (
  <Layout>
    <SEO title="gallery" />
    <p>Check out the photo gallery and you can find this pics on our <a href='https://www.instagram.com/stradaedin/' target='-blank' rel="noreferrer" >Instagram</a></p>

    <Instagram />
    
  </Layout>
)

export default Gallery
