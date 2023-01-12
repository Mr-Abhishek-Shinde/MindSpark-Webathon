import React from 'react';
// import LinearStepper2 from "./LinearStepper2";
import './ideatorPage/submitIdeaPage/ideaForm.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';

function AddProgram() {

  const navigate4=useNavigate();
  const notifySubmitted = () => {
  toast.success("Idea Submitted Successfully!");
}
  const goHome = () =>{
      setTimeout(() => {
          navigate4(-2);
        }, "4000")
  }

  return (
      <>
          <div class="ideaform-container">
              {/* <div className="back_button"><ArrowBackIcon/></div> */}
              <div className="form-title" ><h2>New Program</h2></div>
              <form name="iideaForm" >

                  <p>Program Title: <input type="text" name="idea" placeholder="Enter The Name of Your Program" /></p>
                  <p>Program Details: <input type="text" name="body" placeholder="Enter Description of the Program" /></p>
                  <p>Program Image Link: <input type="text" name="body" placeholder="Paste the Program Image Link Here" /></p>
                  <p>Start Date: <input type="date" name="body"  /></p>
                  <p>End Date: <input type="date" name="body"  /></p>
                  <p class="buttons">
        
                          <Button variant="contained" color="success" onClick={()=>{notifySubmitted();goHome()}}>Submit</Button>
                          <Button variant="contained" color="error" onClick={()=>navigate4(-1)}>Close</Button>
            {/* </NavLink> */}

                  </p>
              </form>
              <ToastContainer />
          </div>
      </>
  )
}

export default AddProgram;