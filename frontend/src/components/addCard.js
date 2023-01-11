import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';

export default function addCard() {
  return (
    <div className='addCard'>
    <NavLink end to="/admin">
        <Button variant="contained">Add Program</Button>
    </NavLink>
    </div>
  )
}
