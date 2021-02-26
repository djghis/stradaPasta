import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

import PhoneIcon from '../images/phone-icon-bw.png'

const CateringEvents = () => (
  <Layout>
    <SEO title="Catering & Events" />
    <h1>Catering & Events</h1>
    <p>We Cater for Everybody.</p>
    <p>We can cater to ecery diet requirements.</p>
    <div className="center-text call-collect">
      <a  href='tel:00447985731129' rel="noreferrer">
        <h2>Call us to plan youe requirements</h2>
        <img className="call-logo"  src={PhoneIcon} alt="" />
        <h2>07985 731129</h2>
      </a>
    </div>
    
    
    
  </Layout>
)

export default CateringEvents
