import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import MenuStrada from '../components/menu-strada'

import Img from 'gatsby-image'
import Menu from '../images/menu.png'
import Image from "../components/images/image"

ReactModal.setAppElement('#___gatsby')

class Menus extends Component {
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
       
          <h1>Our Menu</h1>
          <p>Please find a all lot of delicious treats on there.</p>
          <MenuStrada />

          
      </Layout>
    )
  }
}





export default Menus

