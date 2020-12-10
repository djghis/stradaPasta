import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


// import footerStyles from '../styles/components/footer.module.scss'
// import SocialMediaButtons from './social-media-buttons'
import InstaLogo from '../images/1-19361_watercolor-instagram-icon-png-instagram-logo-white-on.png'


const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata{
            author,
            description
          }
        }
      }
      
    `)
    return (
        <footer className="footer">
            <p>This site was built by {data.site.siteMetadata.author}, © 2020
              <span>
                <a href='https://www.instagram.com/ggdev_elopment/' target="_blank" rel="noreferrer">
                  <img className="insta-logo" src={InstaLogo} alt="Intagram Logo" ></img>
                </a>
              </span>
              <ul>
                <li>
                <Link to="/privacy-policy">Privacy policy</Link>
                </li>
                <li>
                    <Link to="/allergies">Allergy information</Link>
                </li>
                <li>
                    <Link to="/terms">Terms of use</Link>
                </li>
                <li>
                    <Link to="/order-online">Order Now</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
            </p>
        </footer>
    )
}

export default Footer