import React, { useState } from 'react';
import cardImg from '../../img/wallpaper.jpg';
import './programCard.css'
import ProgramDetails from './programDetails';
function ProgramCard(props) {


  const [details, setDetails] = useState(false);
  // const e = props.id_c;
  // function makeBlur(){
  //   e.style.backgroundColor = "black";
  // }

  return (
    <>
      <div id="wrapper" className="wrapper" >
        <div className="card">
          <img src={cardImg} alt="" />
          <p>3 interested</p>
          <h2> Card Name</h2>
          <div className="tags">
            <span>Marketing</span>
            <span>Finance</span>
            <p>+2 more</p>
          </div>
          {/* <Button variant="contained">View Details</Button> */}
          <button className="closeBtn" onClick={() => setDetails(true)}>View Details</button>
        </div>

        <div className="card">
          <img src={cardImg} alt="" />
          <p>3 interested</p>
          <h2> Card Name</h2>
          <div className="tags">
            <span>Marketing</span>
            <span>Finance</span>
            <p>+2 more</p>
          </div>
          {/* <Button variant="contained">View Details</Button> */}
          <button className="closeBtn" onClick={() => setDetails(true)}>View Details</button>
        </div>

        <div className="card">
          <img src={cardImg} alt="" />
          <p>3 interested</p>
          <h2> Card Name</h2>
          <div className="tags">
            <span>Marketing</span>
            <span>Finance</span>
            <p>+2 more</p>
          </div>
          {/* <Button variant="contained" onClick={() => showDetails(true)} sx={{cursor: "pointer"}}>View Details</Button> */}
          {/* <button className="closeBtn"  onClick={() =>{setDetails(true); makeBlur()}}>Apply</button> */}
          <button className="closeBtn" onClick={() => setDetails(true)}>View Details</button>

        </div>

      </div>
      <ProgramDetails trigger={details} setTrigger={setDetails} />
    </>
  );
}

// render(<ProgramCard />);
export default ProgramCard;