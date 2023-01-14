import { React, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router';
import { createBrowserHistory } from 'history';
import emailjs from '@emailjs/browser';


function Login(props) {
	const navigate = useNavigate()
	const history = createBrowserHistory();
	// const [id, setId] = useState("");
	// const [rolee, setRolee] = useState(props.role);
	var id;
	var rolee = props.role;

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

		const response = await fetch("https://bridgestone-backend-production-acbf.up.railway.app/api/users/new/", {
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
				id = data.id;
				rolee = data.role;
			// loginUser(event)
			history.push(`/${rolee}/${id}`);
			navigate(`/${rolee}/${id}`);
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

		const response = await fetch("https://bridgestone-backend-production-acbf.up.railway.app/api/users/login/", {
			method: "POST",
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(user)
		})
		const data = await response.json()

		if (data == "invalid_credentials") {
			notifyIncorrectDetails();
		}
		else {
			id = data.id;
			rolee = data.role;
			notifyLogin();
		}




	}

	const [authType, setauthType] = useState('user');
	// const [registered, setregistered] = useState(false);

	const handleChange = (event) => {
		setauthType(event.target.value);
	}

	const notifyLogin = () => {
		toast.success("Logged in Successfully!");
		history.push(`/${rolee}/${id}`);
		navigate(`/${rolee}/${id}`);
	}

	const notifyIncorrectDetails = () => {
		toast.warning("Please enter the correct details or register if not registered.");
	}

	const notifyRegistered = () => {
		toast.success("Registered Successfully!");
		// sendEmail();
	}

	const notifyExistingUser = () => {
		toast.warning("You have already registered! Please login to continue.");
	}

	const form = useRef();

	// const sendEmail = (e) => {
	// 	e.preventDefault();

	// 	emailjs.sendForm('service_3arnah3', 'template_4do962o', form.current, 'P1aYXn6qkhPDWCSkG')
	// 		.then((result) => {
	// 			console.log(result.text);
	// 		}, (error) => {
	// 			console.log(error.text);
	// 		});

	// 	notify();
	// };

	const notify = () => {
		toast("Message sent successfully!!");
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
				<p id="forgot-password" onClick={() => props.setTrigger(false)}>Haven't registered ?</p>
				<button className="btn" id="btn-login">Login</button>
			</form>
			<ToastContainer />
		</div>


	) : (
		<div className="login">
			<form className="register-body" ref={form} onSubmit={sendUserData}>
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
					<select value={props.role} onChange={(e) => props.setRole(e.target.value)} required="true">
						{/* <option selected="true" value="norole">Choose Role</option> */}
						<option selected="true" value="ideator">Ideator</option>
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