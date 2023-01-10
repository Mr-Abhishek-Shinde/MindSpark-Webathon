import {React} from 'react'
import cardImg from '../../img/wallpaper.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import './programDetails.css';
import { Button } from '@mui/material';
import { NavLink} from "react-router-dom";


function ProgramDetails() {

  return (
    <div className="details-container-outer">
      <div className="details-container">
        <div className="image-container">
          <img src={cardImg} alt="" />
        </div>
        <div className="info-container">
          <h3>Bridgestone- Marketing</h3>
          <p>Idea submission for Marketing dept.</p>
          <div className="pro-duration">
            <h4>Program Duration Check Timeline </h4>
            <p>Date to Date</p></div>
          <hr />
          <h4>Idea Submission</h4>
          <p>Date to Date</p>
          <hr />
          <h4>Interseted | Visitors</h4>
          <div className="visitors">
            <span><PersonIcon />&nbsp;</span>
            <span>0 &nbsp;</span>
            <span><VisibilityIcon />&nbsp;</span>
            <span>4</span>   </div>
          <hr />
          <div className="info-tags">
            <span>#EmployeeEngagement</span>
            <span>#AICognitive</span>
            <span>#Test</span>
            <p>+2 more</p></div>
          <NavLink end to='/submitIdea' >
          <Button variant="contained" color="success">Apply</Button>
					</NavLink>
          <NavLink end to='/Ideator' >
          <Button variant="contained" color="error">close</Button>
					</NavLink>
        </div>
      </div>
    </div>

  ) 
}

export default ProgramDetails;