import React from "react";
import Home from "./components/home";
import User from "./components/user";
import Judge from "./components/judge";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

const App = () => {
	return (
		// <>
		// 	<Navbar />
		// 	<Home />
		// 	if (str === user) {
		// 		<User/>
		// 	}
		// </>
		<>
			{/* <Router>
				<Routes>
					<Route exact path='/' element={<Home/>} >
						<Route path='/user' element={<User />} />
					</Route>
				</Routes>
			</Router> */}

			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/user" element={<User />} />
					<Route path="/judge" element={<Judge />} />
				</Routes>
			</Router>
		</>
	)
}

export default App 
