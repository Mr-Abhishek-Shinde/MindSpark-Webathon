import React, { useState } from 'react';
import Popup from './popup'
import './navbar.css';
import Logo from './images/logo.png'
import userImage from "../../img/userImage.png"
import { NavLink } from 'react-router-dom';


function Navbar() {
    const [btnPopup, setbtnPopup] = useState(false);
    const [ideaForm, setideaForm] = useState(false);

    // const sessionUser = cookies.user
    // console.log(sessionUser)
    if (0) {
        return (
            <div className="navbar2">
                <img src={Logo} style={{ "height": "80%" }} alt="" />
                <div>
                    {/* <span className='spa'>{sessionUser.username}</span> */}
                    <NavLink end to="/">
                        <button className='butt' >LogOut</button>
                    </NavLink>
                    <img src={userImage} alt="" className="usrimg" />
                </div>
            </div>
        )
    } else {
        return (
            <div className="navbar">
                {/* <div className="loginBtn" onClick={() => setideaForm(true)}>Apply</div> */}
                <img src={Logo} style={{ "height": "80%" }} alt="" />
                <div className="loginBtn" onClick={() => setbtnPopup(true)}>Login</div>
                <Popup trigger={btnPopup} setTrigger={setbtnPopup} />
                {/* <IdeaForm trigger={ideaForm} setTrigger={setideaForm} /> */}
            </div>
        )
    }
}

export default Navbar