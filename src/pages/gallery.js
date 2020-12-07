import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => (
  <Layout>
    <SEO title="gallery" />
    <h1>OUr Insta pics</h1>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Gallery
