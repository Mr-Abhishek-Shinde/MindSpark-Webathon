import { React, useState } from 'react';
import './ideaForm.css'
import { useLocation } from 'react-router-dom'


function IdeaForm() {
    let location3 = useLocation();
    const [role, setRole] = useState(location3.state.fromm);

    const submitIdeaDetails = async (event) => {
        
	}

    return (
        <>
            <div class="ideaform-container">
                <h2>Idea Submission Form</h2>
                <form name="iideaForm" onSubmit={submitIdeaDetails}>
                    <p>Program Name: <select value={role} onChange={(e) => setRole(e.target.value)} required="true">
                        <option selected="true" value={role}>{role}</option>
                    </select></p>
                    <p>Idea Title: <input type="text" name="idea" placeholder="Enter The Name of Your Idea" /></p>
                    <p>Idea Details: <input type="text" name="body" placeholder="Enter Description of the Idea" /></p>
                    <p>Idea Image Link: <input type="text" name="body" placeholder="Paste the Idea Image Link Here" /></p>
                    <p class="buttons">
                        <input type="submit" value="Submit" />
                    </p>
                </form>
            </div>
        </>
    )
}

export default IdeaForm;