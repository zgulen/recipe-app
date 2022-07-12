import React from 'react'
import logo from "../../assets/home.svg"
import { Link } from "react-router-dom"
import Ul, { LI, Nav } from './style'
const Navbar = () => {
    return (
        <Nav>
            <Link to="/home">
                <img src={logo} alt="" style={{height:"100px"}}/>
            </Link>
            <Ul>
                <LI><Link to="about">About</Link></LI>
                <LI><a href="https://github.com/zgulen" target="_blank" rel='noreferrer'>Github</a></LI>
                <LI><Link to="/">Logout</Link></LI>
            </Ul>
        </Nav>
    )
}

export default Navbar