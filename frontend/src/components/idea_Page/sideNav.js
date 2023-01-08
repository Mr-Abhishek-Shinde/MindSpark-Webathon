import './sideNav.css';
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from 'react';
import homeImg from './img/icons8-home-24.png';
import infoImg from './img/icons8-info-squared-24.png';
import resumeImg from './img/icons8-profiles-24.png';
import projectsImg from './img/icons8-learning-24.png';
import contactImg from './img/icons8-contact-24.png';


export default function Navbar() {
    const [Show, setShow] = useState(0)
    function navFxn(menuu){
        if (Show === 0) {
            setShow(-100);
            //remove class
            menuu.currentTarget.classList.remove('chng')
        } else {
            setShow(0);
            //add class
            menuu.currentTarget.classList.add('chng')
        }
    }

    function handleResize() {
        if (window.innerWidth < 690) {
            setShow(-100);
            //remove class
        }
        else{
            setShow(0);
            //add class
        }
    }

    window.addEventListener('resize', handleResize)

    return (
        <>
            <div className="sideBar" id="side" style={{left: `${Show}%`}}>
                <div className="logo">
                    <a href="/"><span>P</span>ortfolio</a>
                </div>
                <div className="nav">
                    <li id="navBtn" onClick={handleResize}><NavLink end to='/'><img src={homeImg}
                                alt=""/> Home</NavLink></li>
                    <li id="navBtn" onClick={handleResize}><NavLink end to='/about'><img src={infoImg}
                                alt=""/> About</NavLink></li>
                    <li id="navBtn" onClick={handleResize}><NavLink end to='/resume'><img src={resumeImg}
                                alt=""/> Resume</NavLink></li>
                    <li id="navBtn" onClick={handleResize}><NavLink end to='/projects'><img src={projectsImg}
                                alt=""/> Projects</NavLink></li>
                    <li id="navBtn" onClick={handleResize}><NavLink end to='/contact'><img src={contactImg}
                                alt=""/> Contact</NavLink></li>
                </div>
            </div>
            <div className="nav-toggler" id="toggleBtn1" onClick={navFxn}>
                <span></span>
            </div>
            <Outlet/>
        </>
    )
}