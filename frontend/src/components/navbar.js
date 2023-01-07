import React, { useState } from 'react';
import Popup from './popup'
import './navbar.css';


function Navbar() {
    const [btnPopup, setbtnPopup] = useState(false);

    return (
        <div className="navbar">
            <div className="loginBtn" onClick={() => setbtnPopup(true)}>User Login</div>
            <Popup trigger={btnPopup} setTrigger={setbtnPopup} />
        </div>
    )
}

export default Navbar