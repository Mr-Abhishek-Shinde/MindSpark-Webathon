import React from 'react';

function Login(props) {

	return (props.trigger) ? (
		<div className="login">
			<div className="login-body">
				<div className="input-section">
					{/* <i className="fas fa-user"></i> */}
					<input type="email" name="email" id="email" placeholder="Email" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
				</div>
				<div className="input-section">
					{/* <i className="fas fa-lock"></i> */}
					<input type="password" name="passw" id="passw" placeholder="Password"  value={props.passw} onChange={(e) => props.setPassw(e.target.value)} />
				</div>
				<p id="forgot-password">Forgot your password?</p>
				<button className="btn" id="btn-login">Login</button>
			</div>
		</div>


	) : (
		<div className="login">
			<div className="register-body">
			<div className="input-section">
				{/* <i className="fas fa-envelope"></i> */}
				<input type="text" name="firstName" id="firstName" placeholder="First Name" value={props.firstName} onChange={(e) => props.setfirstName(e.target.value)} />
			</div>
			<div className="input-section">
				{/* <i className="fas fa-envelope"></i> */}
				<input type="text" name="lastName" id="lastName" placeholder="Last Name" value={props.lastName} onChange={(e) => props.setlastName(e.target.value)} />
			</div>
			<div className="input-section">
				{/* <i className="fas fa-envelope"></i> */}
				<input type="email" name="email" id="email" placeholder="Email" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
			</div>
			<div className="input-section">
				{/* <i className="fas fa-lock"></i> */}
				<input type="password" name="passw" id="passw" placeholder="Password" value={props.passw} onChange={(e) => props.setPassw(e.target.value)} />
			</div>
			<p id="registered" onClick={() => props.setTrigger(true)}>Already registered?</p>
			<button className="btn btn-action" id="btn-register">Register</button>
		</div>
		</div>
	)

}
export default Login;