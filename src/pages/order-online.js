import React from 'react'
import DeliverooImage from "../images/deliveroo-logo-2016-600x400.png"
import UberEatImage from "../images/uberEatsLogo.png"
import JustEatImage from "../images/just-eat-logo.png"
import PhoneIcon from '../images/phone-icon-bw.png'

import Layout from "../components/layout"
import SEO from "../components/seo"

const OrderOnline = () => (
  <Layout>
    <SEO title="Order online" />
    
    <h1>Order here</h1>
    <p>Delivery and collection 7 days a week 2pm to 11pm</p>
    <div className="order-links">
      <a target="_blank" rel="noreferrer" href="https://deliveroo.co.uk/menu/edinburgh/old-town/abr-catering-ltd">
        <img className="order-link" src={DeliverooImage} alt=""/>
      </a>
      <a  href="https://www.ubereats.com/gb/edinburgh/food-delivery/strada/TY8Kh9RYSJuRVSskGXxHSA" target="_blank" rel="noreferrer">
        <img className="order-link" src={UberEatImage}/>
      </a>
      <a  href="https://www.just-eat.co.uk/restaurants-strada-edinburgh/menu" target="_blank" rel="noreferrer">
        <img className="order-link"  src={JustEatImage} alt="" />
      </a>
    </div>
   
    <div className="center-text call-collect">
      <a  href='tel:00447985731129' rel="noreferrer">
        <h2>To Call and Collect</h2>
        <img className="call-logo"  src={PhoneIcon} alt="" />
        <h2>07985 731129</h2>
      </a>
      <p>Pick up from 3 Brodie's Close,</p>
      <p>304 Lawnmarket,</p>
      <p>Edinburgh, EH12PS.</p>
    </div>
    
    
  </Layout>
)

export default OrderOnline