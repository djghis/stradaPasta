// import React from 'react'

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const Menus = () => (
//   <Layout>
//     <SEO title="Menus" />
//     <h1>Menus</h1>
//     <p>here are all the way you can Menus:</p>
    
    
    
    
//   </Layout>
// )

// export default Menus

import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

import Img from 'gatsby-image'
import Menu from '../images/menu.png'
import Image from "../components/images/image"

ReactModal.setAppElement('#___gatsby')

class MenusModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }
  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  


  render() {
    return (
      <Layout>
        <div id="main">
          <h1>Our Menu</h1>
          
          <p>Click on it to make it full page.</p>

          <Link to="#" onClick={this.handleModalOpen}>
            {/* <img src={Menu} ></img> */}
            <Image className="menu-photo"/>
            {/* <Img fluid={data.menu.childImageSharp.fluid} alt="Strada full menu"/> */}
          </Link>
        </div>
        <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Full Page Menu"
        >
          <h2>Strada</h2>
          <button onClick={this.handleModalClose}>Go back</button>
          <Image/>
          
          <button onClick={this.handleModalClose}>Go back</button>
        </ReactModal>
      </Layout>
    )
  }
}





export default MenusModal

