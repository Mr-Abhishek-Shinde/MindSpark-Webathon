import React from 'react';
import './champCard.css';
import userImage from "../../img/avatar2.png"

const champNames = [
     {
        "name": "Idea Champion",
        "portfolio": "Marketing"
    },

    {
        "name": "Idea Champion",
        "portfolio": "Human Resource "
    },

     {
        "name": "Idea Champion",
        "portfolio": "Finance"
    },
];

function championCard() {
    return (
        <div className="secContainer">
            <h1 className="secTitle">Know Your Idea Champion</h1>
            <div className="cardContainer">
                {champNames.map((champ)=> {return <div className="card">
                    <img src={userImage} alt="" className="userImage" />
                    <h4 className="name">{champ.name}</h4>
                    {/* <h5 className="champ">Idea Champ 1</h5> */}
                    <h6>{champ.portfolio}</h6>
                </div>})}              

            </div>
        </div>
    )
}

export default championCard