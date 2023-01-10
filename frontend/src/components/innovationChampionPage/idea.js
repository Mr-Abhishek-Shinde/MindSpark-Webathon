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


    return (
        <>
            <div className='idea-container'>
                <h3>{idea.title}</h3>
                <div className='idea-wrapper'>
                    <div>
                        <input className='check' type="checkbox" /><span>Application Stage</span>
                    </div>
                    <div className='button-container'>
                        <ul>
                            <li>Invite</li>
                            <li>Add/Edit</li>
                            <li className='delete'>Delete</li>
                            <li>Details</li>
                        </ul>
                    </div>
                </div>
                <div className='wrap-2'>
                    <div className='user-info son' >
                        <img src={userImage} id="idea-image"></img>
                        <div>
                            <h6>{idea.email}</h6><span>{idea.id}</span>
                        </div>
                    </div>
                    <div className='son'>
                        <h6>{idea.name}</h6>
                        <h5>{idea.program_name}</h5>
                    </div>
                    <div className='son'>
                        <h6>{idea.email}</h6>
                    </div>
                    <div className='son'>
                        <h6>{idea.id}</h6>
                    </div>
                </div>
                <div className='button-wrap'>
                    <form className="accept-form" ref={form} onSubmit="">
                        <div className="input-section2">
                            <input type="text" name="fullName" id="fullName" placeholder="Full Name*" value={idea.name} />
                        </div>
                        <div className="input-section2">
                            <input type="email" name="user_email" id="email" placeholder="Email*" value={idea.email} />
                        </div>
                        <div className="input-section2">
                            <input type="text" name="idea" id="idea" placeholder="title*" value={idea.title} />
                        </div>
                        <div className="input-section2">
                            <input type="text" name="idea" id="status" placeholder="title*" value="accepted" />
                        </div>
                        <span className='idea-btn accept' onClick={sendEmail}>Accept</span>
                    </form>

                    <span className='idea-btn hold'>Hold</span>
                    
                    <form className="accept-form" ref={form} onSubmit="">
                        <div className="input-section2">
                            <input type="text" name="fullName" id="fullName" placeholder="Full Name*" value={idea.name} />
                        </div>
                        <div className="input-section2">
                            <input type="email" name="user_email" id="email" placeholder="Email*" value={idea.email} />
                        </div>
                        <div className="input-section2">
                            <input type="text" name="idea" id="idea" placeholder="title*" value={idea.title} />
                        </div>
                        <div className="input-section2">
                            <input type="text" name="idea" id="status" placeholder="title*" value="rejected" />
                        </div>
                        <span className='idea-btn reject' onClick={sendEmail}>Reject</span>
                    </form>
                </div>
                <ToastContainer/>
            </div>
        </>
    )
}

export default Idea