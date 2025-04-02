import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/sideBar/SideBar";
import Home from "./pages/Home";
import RemovePage from "./pages/RemovePage";
import Carros from "./pages/Carros";
import Modal from "./components/common/Modal";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [isFiltered, setIsFiltered] = useState(false);

	return (
		<Router>
			<SideBar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
			<main
				className={`flex-1 overflow-auto transition-all duration-300 ${
					isOpen ? "ml-64" : "ml-16"
				}`}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/carros"
						element={
							<Carros
								isFiltered={isFiltered}
								onClickFilter={() => setIsFiltered(!isFiltered)}
							/>
						}
					/>
					<Route path="/pecas" element={<RemovePage />} />
					<Route path="/valores" element={<RemovePage />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
