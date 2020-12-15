/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import styled, {createGlobalStyle} from "styled-components"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

// const Global = createGlobalStyle`
//   body{
//     margin: 0;
//   }
// `

// const MenuIcon = styled.button`
//   position: fixed;
//   top: 2rem;
//   right: 2rem;
//   diplay: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   height: 1.5rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   z-index: 5;

//   div {
//     width: 1.5rem;
//     height: 0.2rem;
//     margin: 0.2rem;
//     background: white;
//     border-radius: 5px;
//     transform-origin: 1px;
//     position: relative;
//     transition: opacity 300ms, transform 300ms;

//     :first-child {
//       transform: ${({nav}) => nav ? "rotate(45deg)" : "rotate(0deg)"}
//     }

//     :nth-child(2) {
//       opacity: ${({nav}) => nav ? "0" : "1"}
//     }

//     :nth-child(3) {
//       transform: ${({nav}) => nav ? "rotate(-45deg)": "rotate(0)"}
//     }
//   }
// `

// const MenuLinks = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   height: 100vh;
//   width: 80%;
//   background: black;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transition: transform 500ms;
//   transform:${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")};

//   ul {
//     list-style-type: none;
//   }
  
//   li {
//     margin-top: 1rem;
//   }

//   a {
//     text-decoration: none;
//     color: white;
//     font-size: 1.5rem;
//     transition: color 300ms;

//     :hover {
//       color: grey;
//     }
//   }
// `

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

//   const [nav, showNav] = useState(false)

  return (
    <>
    {/* <Global /> */}
    {/* <MenuIcon className="menuLinks" nav={nav} onClick={() => showNav(!nav)}>
      <div/>
      <div/>
      <div/>
    </MenuIcon>
    <MenuLinks className="menuIcon" nav={nav}>
      <ul>
        <li>
          <a href="#">Strada</a>
        </li>
        <li>
          <a href="#">Menus</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Catering and Events</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </MenuLinks> */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        // className="page-container"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        
        {/* <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
        
      </div>
      <Footer  />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
