import React, { useState, useEffect } from 'react';
import './popup.css'
import Login from './login'
import { Button } from '@mui/material';

function Popup(props) {
  const [authType, setauthType] = useState(true);

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [role, setRole] = useState("ideator");
  const [dataInput, setDataInput] = useState("");

  const submitThis = () => {
    const info = { email: email, passw: passw };
    setDataInput([info]);
  }

  useEffect(() => {
    if (props.trigger) {
      if (authType) {
        document.getElementById("loginText").style.background = 'red';
        document.getElementById("registerText").style.background = '#1c2b3b';
      }
      else {
        document.getElementById("loginText").style.background = '#1c2b3b';
        document.getElementById("registerText").style.background = 'red';
      }
    }
  }, [authType, props.trigger]);


  return (props.trigger) ? (
    <div className="popup">
      <div className="innerContainer">
        {/* <button className="closeBtn" onClick={() => { props.setTrigger(false); setauthType(true) }}>Close</button> */}
        <Button className="closeBtn" variant="contained" color="error" onClick={()=>{ props.setTrigger(false); setauthType(true) }}>Close</Button>        
        {/* {props.children} */}

        <div className="wrap">
          <form action="" className="login" onSubmit={submitThis}>
            <div className="toggle-bar">
              <div className="toggle-login" id='loginText' onClick={() => setauthType(true)}>
                <span>Login</span>
              </div>
              <div className="toggle-register" id='registerText' onClick={() => setauthType(false)}>
                <span>Register</span>
              </div>
            </div>
          </form>
        </div>

        <Login trigger={authType} setTrigger={setauthType} fullName={fullName} setfullName={setfullName} email={email} setEmail={setEmail} pass={passw} setPassw={setPassw} role={role} setRole={setRole} />
      </div>
    </div>
  ) : "";
}

export default Popup