import React from 'react'
import DeliverooImage from "../images/deliveroo-logo-2016-600x400.png"
import UberEatImage from "../images/uberEatsLogo.png"
import JustEatImage from "../images/just-eat-logo.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OrderOnline = () => (
  <Layout>
    <SEO title="Order online" />
    
      <h1>Order here</h1>
      <div className="order-links">
      <a target="_blank" href="https://deliveroo.co.uk/menu/edinburgh/old-town/abr-catering-ltd"><img className="order-link" src={DeliverooImage}/>
        <p>deliveroo</p>
      </a>
      <a  href="https://www.ubereats.com/gb/edinburgh/food-delivery/strada/TY8Kh9RYSJuRVSskGXxHSA" target="_blank"><img className="order-link" src={UberEatImage}/>
        <p>Uber Eat</p>
      </a>
      <a  href="https://www.just-eat.co.uk/restaurants-strada-edinburgh/menu" target="_blank">
      <img className="order-link"  src={JustEatImage} />
        <p>Just Eat</p>
      </a>
    </div>
   
    
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
    
    
  </Layout>
)

export default OrderOnline