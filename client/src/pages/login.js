import React, { useState } from 'react';
import './login.css';
import Home from './home';

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginUser = async (event) => {
		event.preventDefault()

		const response = await fetch("http://localhost:8000/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				password
			})
		})

	}

	return (
		<div className='container'>
			<form onSubmit={loginUser} >
				<div className='info'>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className='info'>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login;