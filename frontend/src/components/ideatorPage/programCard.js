import React, { useState } from 'react';
import cardImg from '../../img/wallpaper.jpg';
import './programCard.css'
import ProgramDetails from './programDetails';
import { Button } from '@material-ui/core';
import { NavLink} from "react-router-dom";

const progNames = [
  {
      "name": "Bridgestone-Finance",
      "portfolio": "Finance",
      "tags": ['#Management,MBA,PGDM','#2D & 3D CAD', '#AI & Cognitive', '#Test'],
      "duration": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023",
      "submit-date": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023"

  },

  {
      "name": "Bridgestone-Marketing",
      "portfolio": "Marketing",
      "tags": ['#Management,MBA,PGDM','#2D & 3D CAD', '#AI & Cognitive', '#Test'],
      "duration": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023",
      "submit-date": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023"



  },

  {
      "name": "Bridgestone-HR",
      "": "Human Resource",
      "tags": ['#Management,MBA,PGDM','#2D & 3D CAD', '#AI & Cognitive', '#Test'],
      "duration": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023",
      "submit-date": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023"

  },
];

function ProgramCard(props) {
  const [details, setDetails] = useState(false);
  // const e = props.id_c;
  // function makeBlur(){
  //   e.style.backgroundColor = "black";
  // }

  return (
    <>
      <div id="wrapper" className="wrapper" >


      {progNames.map((prog) => {return <div className="card">
          <img src={cardImg} alt="" />
          <p>3 interested</p>
          <h2> {prog.name}</h2>
          <div className="tags">
            {prog.tags.slice(0, 2).map((tag) => {return <span>{tag}</span>})}              
            <p>+{prog.tags.length-2} more</p>
          </div>
          <NavLink end to='/programDetails' >
            <Button variant="contained"  onClick={() => {setDetails(true)} }>View Details</Button>
					</NavLink>
          
          {/* <button className="closeBtn" onClick={() => setDetails(true)}>View Details</button> */}
        </div>})}              


        {/* <div className="card">
          <img src={cardImg} alt="" />
          <p>3 interested</p>
          <h2> {progNames[0].name}</h2>
          <div className="tags">
            {progNames[0].tags.slice(0, 2).map((tag) => {return <span>{tag}</span>})}              
            <p>+2 more</p>
          </div>
          <Button variant="contained">View Details</Button>
        </div> */}

        {/* <div className="card">
          <img src={cardImg} alt="" />
          <p>3 interested</p>
          <h2> {progNames[1].name}</h2>
          <div className="tags">
            {progNames[1].tags.slice(0, 2).map((tag) => {return <span>{tag}</span>})}              
            <p>+2 more</p>
          </div>
          <button className="closeBtn" onClick={() => setDetails(true)}>View Details</button>
        </div>

        <div className="card">
          <img src={cardImg} alt="" />
          <p>3 interested</p>
          <h2> {progNames[2].name}</h2>
          <div className="tags">
            {progNames[2].tags.slice(0, 2).map((tag) => {return <span>{tag}</span>})}              
            <p>+2 more</p>
          </div>
          <button className="closeBtn" onClick={() => setDetails(true)}>View Details</button>
        </div> */}

      </div>
      {/* <ProgramDetails trigger={details} setTrigger={setDetails} /> */}
    </>
  );
}

// render(<ProgramCard />);
export default ProgramCard;