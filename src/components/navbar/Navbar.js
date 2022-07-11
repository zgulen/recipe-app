import React from 'react'
import logo from "../../assets/home.svg"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <Link to="home">
                <img src={logo} alt="" style={{height:"100px"}}/>
            </Link>
            <ul>
                <li><Link to="about">About</Link></li>
                <li><a href="https://github.com/zgulen" target="_blank" rel='noreferrer'>Github</a></li>
                <li><Link to="logout">Logout</Link></li>
            </ul>
        </div>
    )
}

export default Navbar