import React from 'react'
import './idea.css'
import userImage from "../../img/userImage.png"

function Idea({idea}) {
  return (
    <>
    <div className='idea-container'>
        <h3>{idea.title}</h3>
        <div className='idea-wrapper'>
            <div>
                <input className='check' type = "checkbox"/><span>Application Stage</span>
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
            <span className='idea-btn accept'>Accept</span>
            <span className='idea-btn hold'>Hold</span>          
            <span className='idea-btn reject'>Reject</span>
        </div>
    </div>
    </>
  )
}

export default Idea