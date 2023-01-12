import { React, useState } from 'react';
import './ideaForm.css'
import { useLocation,useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';


function IdeaForm() {
    let location3 = useLocation();
    const [role, setRole] = useState(location3.state.fromm);

  

    const navigate3=useNavigate();
    const notifySubmitted = () => {
		toast.success("Idea Submitted Successfully!");
	}
    const goHome = () =>{
        setTimeout(() => {
            navigate3(-2);
          }, "4000")
    }

    return (
        <>
            <div class="ideaform-container">
                {/* <div className="back_button"><ArrowBackIcon/></div> */}
                <div className="form-title" ><h2>Idea Submission Form</h2></div>
                <form name="iideaForm" >
                    <p>Program Name: <select value={role} onChange={(e) => setRole(e.target.value)} required="true">
                        <option selected="true" value={role}>{role}</option>
                    </select></p>
                    <p>Idea Title: <input type="text" name="idea" placeholder="Enter The Name of Your Idea" required="true"/></p>
                    <p>Idea Details: <input type="text" name="body" placeholder="Enter Description of the Idea" /></p>
                    <p>Idea Image Link: <input type="text" name="body" placeholder="Paste the Idea Image Link Here" /></p>
                    <p class="buttons">
                        {/* <input type="submit" value="Submit" onClick={()=>navigate3(-2)}/> */}
                        {/* <NavLink end to='/submitIdea' state={{ fromm: location.state.from.name }} > */}
                            <Button variant="contained" color="success" onClick={()=>{notifySubmitted();goHome()}}>Submit</Button>
                            <Button variant="contained" color="error" onClick={()=>navigate3(-1)}>Close</Button>
					    {/* </NavLink> */}

                    </p>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default IdeaForm;