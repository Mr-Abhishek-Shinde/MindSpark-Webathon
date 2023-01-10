import React from 'react'
import './idea.css'
import userImage from "../../img/userImage.png"

function Idea() {
  return (
    <>
    <div className='idea-container'>
        <h3>Title</h3>
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
                    <h6>email</h6><span>112103134</span>
                </div>
            </div>
            <div className='son'>
                <h6>Name</h6>
                <h5>Program Name</h5>
            </div>
            <div className='son'>
                <h6>Email</h6>
            </div>
            <div className='son'>
                <h6>Id</h6>
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