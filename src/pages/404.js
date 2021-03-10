import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>You can still go to our ordering page</p>
    <Link to="/order-online" className="order-now-btn__menu" >Order Now</Link>
  </Layout>
)

export default NotFoundPage
