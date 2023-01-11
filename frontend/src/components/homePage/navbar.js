import React, { useState } from 'react';
import Popup from './popup'
import './navbar.css';
import { useCookies } from 'react-cookie';
import Logo from './images/logo.png'


function Navbar() {
    const [btnPopup, setbtnPopup] = useState(false);
    const [ideaForm, setideaForm] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    console.log(cookies)
    return (
        <div className="navbar">
            {/* <div className="loginBtn" onClick={() => setideaForm(true)}>Apply</div> */}
            <img src={Logo} style={{"height": "80%"}} alt="" />
            <div className="loginBtn" onClick={() => setbtnPopup(true)}>Login</div>
            <Popup trigger={btnPopup} setTrigger={setbtnPopup} />
            {/* <IdeaForm trigger={ideaForm} setTrigger={setideaForm} /> */}
        </div>
    )
}

export default Navbar