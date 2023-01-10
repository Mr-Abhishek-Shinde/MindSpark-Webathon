import {React, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './idea.css'
import userImage from "../../img/userImage.png"
import emailjs from '@emailjs/browser';

function Idea({ idea }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cjb82yu', 'template_wncgbku', form.current, 'FvEdaxdn0Br206UYe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        console.log("Email sent");
		notify();
    };

    const notify = () => {
        toast("Status email sent to ideator successfully!!");
    }


function Idea({ idea }) {
    return (
        <>
            <div className='idea-container'>
                <div className='idea-top'>
                    {idea.title}
                </div>
                <div className='idea-wrapper'>
                    {idea.body}
                </div>
                <div className='idea-footer'>
                    <div className='author-img'>
                        <img src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'></img>
                    </div>
                    <div className='author-name'>
                        {idea.author[0].name}
                    </div>
                </div>
                <div className='button-wrap'>
                    <span className='idea-btn accept'>Accept</span>
                    <span className='idea-btn hold'>Hold</span>
                    <span className='idea-btn reject'>Reject</span>
                </div>
            </div>
        </>
    )
}

export default Idea