import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
function Navbar(){
    return (
        <nav>
             <div className="logo">
            <h1 className="animate__animated animate__heartBeat">LineUp</h1>
        </div>
        <div className="menu">
            <Link to="./">HOME</Link>
            <Link to="./about">ABOUT</Link>
            <Link to="./services">SERVICES</Link>
            <Link to="./contact">CONTACT</Link>
        </div>
        </nav>
    )
}

export default Navbar;