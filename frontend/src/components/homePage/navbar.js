import React, { useState } from 'react';
import Popup from './popup'
import './navbar.css';


function Navbar() {
    const [btnPopup, setbtnPopup] = useState(false);
    const [ideaForm, setideaForm] = useState(false);

    return (
        <div className="navbar">
            {/* <div className="loginBtn" onClick={() => setideaForm(true)}>Apply</div> */}
            <div className="loginBtn" onClick={() => setbtnPopup(true)}>Login</div>
            <Popup trigger={btnPopup} setTrigger={setbtnPopup} />
            {/* <IdeaForm trigger={ideaForm} setTrigger={setideaForm} /> */}
        </div>
    )
}

export default Navbar