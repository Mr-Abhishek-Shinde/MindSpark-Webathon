import React from 'react';
import './champCard.css';
import userImage from "../../img/userImage.png"

const champNames = {
    "Champ 1": {
        "name": "ABC",
        "portfolio": "Marketing"
    },

    "Champ 2": {
        "name": "PQR",
        "portfolio": "Manufacturing"
    },

    "Champ 3": {
        "name": "XYZ",
        "portfolio": "Finance"
    },
};

function championCard() {
    return (
        <div className="secContainer">
            <h1 className="secTitle">Know Your Idea Champion</h1>
            <div className="cardContainer">
                <div className="card">
                    <img src={userImage} alt="" className="userImage" />
                    <h4 className="name">{champNames['Champ 1'].name}</h4>
                    <h5 className="champ">Idea Champ 1</h5>
                    <h6>{champNames['Champ 1'].portfolio}</h6>
                </div>
                <div className="card">
                    <img src={userImage} alt="" className="userImage" />
                    <h4 className="name">{champNames['Champ 2'].name}</h4>
                    <h5 className="champ">Idea Champ 1</h5>
                    <h6>{champNames['Champ 2'].portfolio}</h6>
                </div>
                <div className="card">
                    <img src={userImage} alt="" className="userImage" />
                    <h4 className="name">{champNames['Champ 3'].name}</h4>
                    <h5 className="champ">Idea Champ 1</h5>
                    <h6>{champNames['Champ 3'].portfolio}</h6>
                </div>

            </div>
        </div>
    )
}

export default championCard