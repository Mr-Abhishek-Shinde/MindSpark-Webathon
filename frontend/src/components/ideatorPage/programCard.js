import React, { useState } from 'react';
import Prog1 from '../../img/prog1.jpg';
import Prog2 from '../../img/prog2.jpg';
import Prog3 from '../../img/prog3.jpg';
import './programCard.css'
import { Button } from '@material-ui/core';
import { NavLink } from "react-router-dom";


const progNames = [
  {
    "name": "Bridgestone-Finance",
    "portfolio": "Finance",
    "tags": ['#Management,MBA,PGDM', '#2D & 3D CAD', '#AI & Cognitive', '#Test'],
    "duration": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023",
    "submit-date": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023",
    "ProgImg": Prog1

  },

  {
    "name": "Bridgestone-Marketing",
    "portfolio": "Marketing",
    "tags": ['#Management,MBA,PGDM', '#2D & 3D CAD', '#AI & Cognitive', '#Test'],
    "duration": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023",
    "submit-date": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023",
    "ProgImg": Prog2

  },

  {
    "name": "Bridgestone-HR",
    "": "Human Resource",
    "tags": ['#Management,MBA,PGDM', '#2D & 3D CAD', '#AI & Cognitive', '#Test'],
    "duration": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023",
    "submit-date": "Monday 5 Dec 2022 \t To \t Thursday 5 Jan 2023",
    "ProgImg": Prog3

  },
];

function ProgramCard(props) {
  // const [program, setProgram] = useState([]);
  // setProgram(progNames);
  const [details, setDetails] = useState(false);

  return (
    <>
      <div id="wrapper" className="wrapper" >

        <h2>BU PROGRAMS</h2>

        {progNames.map((prog) => {
          return <div className="card">
            <img src={prog.ProgImg} alt="" />
            <p>3 interested</p>
            <h2> {prog.name}</h2>
            <div className="tags">
              {prog.tags.slice(0, 2).map((tag) => { return <span>{tag}</span> })}
              <p>+{prog.tags.length - 2} more</p>
            </div>
            <NavLink end to="/programDetails" state={{ from : prog}}>
              <Button variant="contained" onClick={() => { setDetails(true) }}>View Details</Button>
            </NavLink>

          </div>
        })}

      </div>
    </>
  );
}

export default ProgramCard;