import React from 'react'
import cardImg from '../img/wallpaper.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import './programDetails.css';



function ProgramDetails() {
  return (
    <div className="details-container">
      <div className="image-container">
        <img src={cardImg} alt="" />
      </div>
      <div className="info-container">
        <h3>Bridgestone- Marketing</h3>
        <p>Idea submission for Marketing dept.</p>
        <h4>Program Duration Check Timeline </h4>
        <p>Date to Date</p>
        <hr />
        <h4>Idea Submission</h4>
        <p>Date to Date</p> 
        <hr/>
        <h4>Interseted | Visitors</h4>
        <span><PersonIcon/>&nbsp;</span>
        <span>0 &nbsp;</span>
        <span><VisibilityIcon/>&nbsp;</span>
        <span>4</span>
      </div>
    </div>
    
    )
}

export default ProgramDetails;