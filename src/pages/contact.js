import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyles from "./contact.module.scss"

import Instalogo from '../images/insta-logo-bw.png'
import Facebooklogo from '../images/facebook-logo-bw.png'
import PhoneIcon from '../images/phone-icon-bw.png'
import MailIcon from '../images/mail-icon-bw-other.png'

const ContactUs = () => (
  <Layout>
    <SEO title="Contact us" />
    <h1>Contact Us</h1>
    <p>here are all the way you can contact us:</p>
    
    <div className="Contact-us">
      <h2>
        <a href='tel:00447899347855' rel="noreferrer">Phone us on: 07899 347855
          <span>
            <img className='insta-logo' src={PhoneIcon} alt="" />
          </span>
        </a>
      </h2>

      <br/>

      <h2> 
        <a href='mailto:Babacatering@outlook.com' rel="noreferrer">Email us to: Babacatering@outlook.com
          <span>
            <img className='insta-logo' src={MailIcon} alt="" />
          </span>
        </a>
      </h2>
      
      <h1>You can also find us on social medias</h1>
    </div>
    <div>
     <h2 >
      <a href='https://www.instagram.com/stradaedin/' target='_blank' rel="noreferrer" >Follow us on Instagram  
          <span>
            <img className='insta-logo' src={Instalogo} alt="" />
          </span>
      </a>
    </h2>

    <br/>

    <h2>
      <a href='https://www.facebook.com/stradaedin' target="_blank" rel="noreferrer">Follow us on Facebook  
        <span>
          <img className='insta-logo' src={Facebooklogo} alt="" />
        </span>
      </a>
    </h2>
     
    </div>
    
    
    
    
  </Layout>
)

export default ContactUs