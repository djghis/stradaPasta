import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyles from "./contact.module.scss"

import Instalogo from '../images/insta-logo-bw.png'
import Facebooklogo from '../images/facebook-logo-bw.png'

const ContactUs = () => (
  <Layout>
    <SEO title="Contact us" />
    <h1>Contact Us</h1>
    <p>here are all the way you can contact us:</p>
    
    <div className="Contact-us">
    <h2><a href='tel:00447985731129' rel="noreferrer">Phone us on: 07985 731129</a></h2><br/>
    <h2><a href='mailto:hellocleaningbees@gmail.com' rel="noreferrer">Email us to: hellocleaningbees@gmail.com</a></h2>
    
    <h1>You can also find us on social medias</h1>
    </div>
    <div>
     <h2 
            ><a href='https://www.instagram.com/thecleaningbeesel/' target='-blank' rel="noreferrer" >Follow us on Instagram  
                <span>
                <img className='insta-logo' src={Instalogo} 
                alt="instagram logo png @transparentpng.com" />
                </span>
            </a></h2>
    <h2>
      <a href='https://www.facebook.com/thecleaningbeesnorthberwick' target="_blank" rel="noreferrer">Follow us on Facebook  
        <span><img 
        className='insta-logo' src={Facebooklogo} 
        alt="facebook logo" /></span>
      </a>
    </h2>
     
    </div>
    
    
    
    
  </Layout>
)

export default ContactUs