import React from 'react'
import './idea.css'

function Idea() {
  return (
    <>
        <h1>Title</h1>
        <input type = "checkbox"/><span>Application Stage</span>
        <div>
            <ul>
                <li>Invite</li>
                <li>Add/Edit</li>
                <li>Delete</li>
                <li>Details</li>
            </ul>
        </div>
        <hr/>
        <div>
            <div>
                <img></img>
                <h3>email</h3><span>112103134</span>
            </div>
            <div>
                <h2>Name</h2>
                <h3>Program Name</h3>
            </div>
            <div>
                <h1>Email</h1>
            </div>
            <div>
                <h1>Id</h1>
            </div>
        </div>
        <div>
            <ul>
                <li>
                    <button>Accept</button>
                </li>
                <li>
                    <button>Hold</button>
                </li>
                <li>
                    <button>Reject</button>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Idea