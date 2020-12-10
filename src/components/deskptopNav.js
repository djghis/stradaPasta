import React, {useEffect, useRef, useState} from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../utils/breakPoints"
import Logo from '../images/background-logo-cut.jpeg'

const DesktopNavMenu = () => {

    const[background, setBackground] = useState(false);
    const navRef = useRef()

    navRef.current = background;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100
            if (navRef.current !== show) {
                setBackground(show)
            }
        }
        document.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <StyledHeader background={background}>
            <div className="logo"> <img  src={Logo} className="logo-strada" ></img></div>
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
        </StyledHeader>
    )
}

export default DesktopNavMenu

const StyledHeader = styled.header`
display: none;
@media ${breakpoints.lg} {
    display: flex;
    ${'' /* position:fixed; */}
    align-items: center;
    width: 100%;
    top:0;
    z-index: 10;
    padding: .5rem;
    transition: background 400ms;
    ${'' /* background: black; */}
    background: ${({ background }) => background ? "grey" : "black"};

        .logo-strada {
            height: 100px;
            width: auto;
        }

        ul{
            display: flex;
            align-items: center;
            float: right;
            width: 100%;
            justify-content: space-around;
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
    }
}
`