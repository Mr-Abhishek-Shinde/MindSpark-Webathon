import React from "react";
import Home from "./pages/home";
import Ideator from "./pages/ideator";
import Innovation_Champion from "./pages/innovationChampion"
import SubmitIdea from "./pages/submitPage";
import ProgramPage from "./pages/programPage"
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

const App = () => {
	return (
		
		<>	

			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/ideator/:id" element={<Ideator />} />
					<Route path="/innovation_champion/:id" element={<Innovation_Champion />} />
					<Route path="/submitIdea" element={<SubmitIdea />} />
					<Route path="/programDetails" element={<ProgramPage />} />
				</Routes>
			</Router>
		</>
	)
}

export default App 
