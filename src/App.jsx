import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/sideBar/SideBar";
import Home from "./pages/Home";
import RemovePage from "./pages/RemovePage";
import Carros from "./pages/Carros";
import Pecas from "./pages/Pecas";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [isFiltered, setIsFiltered] = useState(false);
	const [modalAtivo, setModalAtivo] = useState(null);

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
								modalAtivo={modalAtivo}
								onClickModal={(e) => setModalAtivo(e)}
								onCloseModal={() => setModalAtivo(null)}
							/>
						}
					/>
					<Route
						path="/pecas"
						element={
							<Pecas
								isFiltered={isFiltered}
								onClickFilter={() => setIsFiltered(!isFiltered)}
								modalAtivo={modalAtivo}
								onClickModal={(e) => setModalAtivo(e)}
								onCloseModal={() => setModalAtivo(null)}
							/>
						}
					/>
					<Route path="/valores" element={<RemovePage />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
