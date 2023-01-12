import React, { useState } from 'react';
import './navbar.css';
import { useCookies } from 'react-cookie';
import Logo from './images/logo.png'
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

function Navbar() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    console.log(cookies)
    return (
        <div className="navbar">
            <img src={Logo} style={{ "height": "80%" }} alt="" />
            <NavLink end to="/programform">
                <Button variant="contained">Add Program</Button>
            </NavLink>
        </div>
    )
}

export default Navbar