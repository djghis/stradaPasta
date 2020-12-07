import React, {useState} from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {breakpoints}  from "../utils/breakPoints"

const MobileNavMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <MenuBar>
            <Link to="/">Home</Link>
            <MenuIconContainer>
                <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                    <div/>
                    <div/>
                    <div/>
                </MenuIcon>
            </MenuIconContainer>
            {/* <MenuLinks background={background}> */}
            <MenuLinks menuOpen={menuOpen}>
            <ul>
                <li>
                <Link to="/" className="white">Home</Link>
                </li>
                <li>
                    <Link to="/menus">Menu</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/order-online">Order-Online</Link>
                </li>
                <li>
                    <Link to="/catering-events">Catering & Events</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </MenuLinks>
        </MenuBar>
    )
}

export default MobileNavMenu

const MenuBar = styled.header`
    @media ${breakpoints.lg} {
        display: none;
    }

    height: 3rem;
    position: fixed;
    width: 100%;
    background: black;
    border-bottom: blue;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuIconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MenuIcon = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2rem;
    outline: thin-dotted;
    z-index: 11;
    

    div {
        width: 2rem;
        height: .25rem;
        ${'' /* background: white; */}
        background: ${({menuOpen}) => menuOpen ? "red" : "white"};
        border-radius: 10px;
        transform-origin: 1px;
        transition: opacity 400ms, transform 400ms;

        :first-child {
            transform: ${({menuOpen}) => menuOpen ? "rotate(45deg)" : "rotate(0deg)" }
        }

        :nth-child(2) {
            opacity: ${({menuOpen}) => menuOpen ? "0" : "1"};
            transform: ${({menuOpen}) => menuOpen ? "translateX(20px)" : "translateX(0)"}
        }

        :nth-child(3) {
            transform: ${({menuOpen}) => menuOpen ? "rotate(-45deg)" : "rotate(0deg)" }
        }


    }
`

const MenuLinks = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    position: absolute;
    z-index: 9;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    transition transform 600ms;
    transform: ${({menuOpen}) => menuOpen ? "translateX(0)" : "translateX(100%)"};

    
    ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            float: right;
            width: 100%;
            margin: 0;
        }

        li {
            list-style: none;

            a {
                text-decoration: none;
                color: white;
                transition: color 400ms;

                :hover {
                    color: grey;
                }
            }
    
`