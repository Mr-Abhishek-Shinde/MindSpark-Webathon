import { React, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './idea.css'
import userImage from "../../img/userImage.png"
import emailjs from '@emailjs/browser';

function Idea({ idea }) {
    const form = useRef();

    const sendEmail1 = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cjb82yu', 'template_3rm7ub8', form.current, 'FvEdaxdn0Br206UYe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        console.log("Email sent");
        notifyAccept();
    };

    const sendEmail2 = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cjb82yu', 'template_wncgbku', form.current, 'FvEdaxdn0Br206UYe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        console.log("Email sent");
        notifyReject();
    };

    const notifyAccept = () => {
        toast("acception email sent to ideator successfully!!");
    }

    const notifyReject = () => {
        toast("Rejection email sent to ideator successfully!!");
    }

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
                    <form className="accept-form" ref={form} onSubmit="">
                        <div className="input-section2">
                            <input type="text" name="fullName" id="fullName" placeholder="Full Name*" value={idea.author[0].name} />
                        </div>
                        <div className="input-section2">
                            <input type="email" name="user_email" id="email" placeholder="Email*" value={idea.author[0].email} />
                        </div>
                        <div className="input-section2">
                            <input type="text" name="idea" id="idea" placeholder="title*" value={idea.title} />
                        </div>
                        {/* <div className="input-section2">
                            <input type="text" name="status" id="status" placeholder="title*" value="accepted" />
                        </div> */}
                        <span className='idea-btn accept' onClick={sendEmail1}>Accept</span>
                    </form>

                    <span className='idea-btn hold'>Hold</span>

                    <form className="accept-form" ref={form} onSubmit="">
                        <div className="input-section2">
                            <input type="text" name="fullName" id="fullName" placeholder="Full Name*" value={idea.author[0].name} />
                        </div>
                        <div className="input-section2">
                            <input type="email" name="user_email" id="email" placeholder="Email*" value={idea.author[0].email} />
                        </div>
                        <div className="input-section2">
                            <input type="text" name="idea" id="idea" placeholder="title*" value={idea.title} />
                        </div>
                        {/* <div className="input-section2">
                            <input type="text" name="status" id="status" placeholder="title*" value="rejected" />
                        </div> */}
                        <span className='idea-btn reject' onClick={sendEmail2}>Reject</span>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Idea;