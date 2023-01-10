import React from "react";
import Home from "./pages/home";
import Ideator from "./pages/ideator";
import Innovation_Champion from "./pages/innovationChampion"
import SubmitIdea from "./pages/submitPage";
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
					<Route path="/ideator" element={<Ideator />} />
					<Route path="/innovation_champion" element={<Innovation_Champion />} />
					<Route path="/submitIdea" element={<SubmitIdea />} />
				</Routes>
			</Router>
		</>
	)
}

export default App 
