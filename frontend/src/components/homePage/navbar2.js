import React from 'react'
import userImage from "../../img/userImage.png"
import Logo from './images/logo.png'
import './navbar.css';

function Navbar2(props) {
  return (
    <div className="navbar2">
        <img src={Logo} style={{"height": "80%"}} alt=""/>
        <div>
            <span>{props.name}</span>
            <img src={userImage} alt="" className="usrimg"/>
        </div>
    </div>
  )
} 

export default Navbar2