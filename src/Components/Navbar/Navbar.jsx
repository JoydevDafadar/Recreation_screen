import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {

    const location = useLocation();
    console.log( location.pathname );

    const [isbar, setIsbar ] = useState( false );

  return (
    <>
        <div className="nav p1">
            <div className="logo">
                <img src="./Icon/logo.png" alt="logo" />
                <h2>Enhance AI</h2>
            </div>
            <div className="items">
                <ul className={(isbar === true )?"active": "" }>
                    <li className={(location.pathname === '/')? "active" :""}>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
                <button><i className="fa-regular fa-user"></i>Free Signup</button>
                <button className='bar' 
                onClick={() =>{
                    setIsbar(!isbar);
                }}
                ><i className="fa-solid fa-bars"></i></button>
            </div>
            <img className='first' src="./Icon/shape4.png" alt="first" />
            <img className='second' src="./Icon/shape3.png" alt="second" />
        </div>
    </>
  )
}

export default Navbar