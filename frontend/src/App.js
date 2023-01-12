import React from "react";
import Home from "./pages/home";
import Ideator from "./pages/ideator";
import InnovationChampion from "./pages/innovationChampion"
import SubmitIdea from "./pages/submitPage";
import ProgramPage from "./pages/programPage"
import AdminPage from "./pages/adminPage"
import ProgramForm from "./pages/programForm"
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
					<Route path="/innovationchampion/:id" element={<InnovationChampion />} />
					<Route path="/submitIdea" element={<SubmitIdea />} />
					<Route path="/programDetails" element={<ProgramPage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/programform" element={<ProgramForm />} />
				</Routes>
			</Router>
		</>
	)
}

export default App 
