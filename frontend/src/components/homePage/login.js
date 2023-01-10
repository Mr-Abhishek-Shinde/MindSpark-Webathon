import { React, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
import { NavLink, Outlet } from "react-router-dom";

function Login(props) {
	var data;
	const [cookies, setCookie, removeCookie] = useCookies(['user']);

	const sendUserData = async (event) => {
		event.preventDefault();

		const fullname = event.target.fullName.value

		const user = {
			"first_name": fullname.split(" ")[0],
			"last_name": fullname.split(" ").slice(-1)[0],
			"email": event.target.email.value,
			"password": event.target.passw.value,
			"role": props.role
		}

		const response = await fetch("http://localhost:8000/api/users/new/", {
			method: "POST",
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(user)
		})
		const data = await response.json()
		console.log(data)
		if (data !== "existing_user") {
			notifyRegistered();
		}
		else {
			notifyExistingUser();
		}
	}

	const loginUser = async (event) => {
		event.preventDefault();

		const user = {
			"email": event.target.email.value,
			"password": event.target.passw.value,
		}

		const response = await fetch("http://localhost:8000/api/users/login/", {
			method: "POST",
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(user)
		})
		data = await response.json()
		console.log(data)
		if (data !== "invalid") {
			notifyLogin();
		}
		else {
			notifyIncorrectDetails();
		}

		setCookie('user', data, { path: '/' });
	}

	const [authType, setauthType] = useState('user');
	const [registered, setregistered] = useState(false);

	const handleChange = (event) => {
		setauthType(event.target.value);
	}

	const notifyLogin = () => {
		toast.success("Logged in Successfully!");
	}
	const notifyIncorrectDetails = () => {
		toast.warning("Please enter the correct details or register if not registered.");
	}
	const notifyRegistered = () => {
		toast.success("Registered Successfully!");
	}
	const notifyExistingUser = () => {
		toast.warning("You have already registered! Please login to continue.");
	}
	const notifyRole = () => {
		toast.warning("Please select a role.");
	}

	return (props.trigger) ? (
		<div className="login">
			<form className="login-body" onSubmit={loginUser}>
				<div className="input-section">
					{/* <i className="fas fa-user"></i> */}
					<input type="email" name="email" id="email" placeholder="Email*" required="true" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
				</div>
				<div className="input-section">
					{/* <i className="fas fa-lock"></i> */}
					<input type="password" name="passw" id="passw" placeholder="Password*" required="true" value={props.passw} onChange={(e) => props.setPassw(e.target.value)} />
				</div>
				<p id="forgot-password">Forgot your password?</p>
				if(data.is_active){
					<NavLink end to='/ideator' >
						<button className="btn" id="btn-login">Login</button>
					</NavLink>
				}
				<Outlet />
			</form>
		</div>


	) : (
		<div className="login">
			<form className="register-body" onSubmit={sendUserData}>
				<div className="input-section">
					<input type="text" name="fullName" id="fullName" placeholder="Full Name*" required="true" value={props.fullName} onChange={(e) => props.setfullName(e.target.value)} />
				</div>
				<div className="input-section">
					<input type="email" name="email" id="email" placeholder="Email*" required="true" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
				</div>
				<div className="input-section">
					<input type="password" name="passw" id="passw" placeholder="Password*" required="true" value={props.passw} onChange={(e) => props.setPassw(e.target.value)} />
				</div>
				<div className="input-section">
					<select value={props.role} onChange={(e) => props.setRole(e.target.value)}>
						<option selected="true">Choose Role</option>
						<option value="ideator">Ideator</option>
						<option value="innovation_champion">Innovation Champion</option>
						<option value="admin">Admin</option>
					</select>
				</div>
				<p id="registered" onClick={() => props.setTrigger(true)}>Already registered?</p>
				<button className="btn btn-action" id="btn-register">Register</button>

			</form>
			<ToastContainer />
		</div>
	)

}
export default Login;