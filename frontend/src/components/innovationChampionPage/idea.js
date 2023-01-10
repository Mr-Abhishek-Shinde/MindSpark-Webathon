import React from 'react'
import './idea.css'
import userImage from "../../img/userImage.png"

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