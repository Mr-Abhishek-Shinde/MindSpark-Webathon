import React, { useState, useEffect } from 'react';
import './popup.css'
import Login from './login'

function Popup(props) {
  const [authType, setauthType] = useState(true);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");

  const submitThis = () => {
    const info = { email: email, passw: passw };
    setDataInput([info]);
  }


  useEffect(() => {
    if (authType) {
      document.getElementById("loginText").style.background = 'red';
      document.getElementById("registerText").style.background = '#1c2b3b';
    }
    else{
      document.getElementById("loginText").style.background = '#1c2b3b';
      document.getElementById("registerText").style.background = 'red';
    }
  }, [authType]);

  return (props.trigger) ? (
    <div className="popup">
      <div className="innerContainer">
        <button className="closeBtn" onClick={() => props.setTrigger(false)}>Close</button>
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

        <Login trigger={authType} setTrigger={setauthType} firstName={firstName} setfirstName={setfirstName} lastName={lastName} setlastName={setlastName} email={email} setEmail={setEmail} pass={passw} setPass={setPassw} />
      </div>
    </div>
  ) : "";
}

export default Popup