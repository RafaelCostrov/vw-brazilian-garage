import passatAmarelo from "../assets/images/passat-amarelo.jpg";
import Container from "../components/home/Container";
import Titulo from "../components/common/Titulo";
import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

function Carros({ isFiltered, onClickFilter }) {
	return (
		<div className="transition-all duration-300  min-w-0 min-h-screen grid  auto-cols-fr auto-rows-min p-4 ">
			<div className="p-4 space-y-4">
				<div className="bg-white shadow-md rounded-lg flex justify-between p-4 w-full ">
					<h1 className=" text-2xl font-bold text-gray-900 self-center">
						Carros
					</h1>
					<button
						className="hover:scale-130 transition duration-300 hover:text-yellow-300"
						onClick={onClickFilter}
					>
						{isFiltered ? <FaFilterCircleXmark /> : <FaFilter />}
					</button>
				</div>
				{isFiltered && (
					<motion.form
						initial={{ opacity: 0, scale: 1 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.3 }}
						action=""
						method="get"
						className={`bg-white rounded-lg shadow-md p-4 flex flex-col ${
							isFiltered
								? "opacity-100 scale-100 delay-100"
								: "opacity-0 scale-80"
						}`}
					>
						<Titulo className="px-4 ">Filtros</Titulo>
						<div className="flex justify-around">
							<div className="flex flex-col">
								<label className="font-medium text-gray-700">
									Marca/Modelo
								</label>
								<input
									type="text"
									className="bg-slate-100 rounded-sm shadow-md border border-gray-300 focus:outline-2 outline-offset-2 outline-blue-300"
								/>
							</div>
							<div className="flex flex-col">
								<label className="font-medium text-gray-700">Ano</label>
								<div className="flex gap-2">
									<input
										type="number"
										className="bg-slate-100 rounded-sm shadow-md border border-gray-300 w-20 focus:outline-2 outline-offset-2 outline-blue-300 "
										placeholder="Min"
									/>
									<input
										type="number"
										className="bg-slate-100 rounded-sm shadow-md border border-gray-300 w-20 focus:outline-2 outline-offset-2 outline-blue-300"
										placeholder="Max"
									/>
								</div>
							</div>
							<div className="flex flex-col">
								<label className="font-medium text-gray-700">Valor</label>
								<div className="flex gap-2">
									<input
										type="number"
										className="bg-slate-100 rounded-sm shadow-md border border-gray-300 w-20 focus:outline-2 outline-offset-2 outline-blue-300"
										placeholder="Min"
									/>
									<input
										type="number"
										className="bg-slate-100 rounded-sm shadow-md border border-gray-300 w-20 focus:outline-2 outline-offset-2 outline-blue-300"
										placeholder="Max"
									/>
								</div>
							</div>
							<div className="flex flex-col items-center gap-2">
								<div className="flex items-center gap-2">
									<label className="font-medium text-gray-700">
										Apenas único dono
									</label>
									<input type="checkbox" className="size-4" />
								</div>
								<div className="flex items-center gap-2">
									<label className="font-medium text-gray-700">
										Apenas com sociedade
									</label>
									<input type="checkbox" className="size-4" />
								</div>
							</div>
							<button
								type="submit"
								className="bg-amber-300 self-center flex items-center gap-2 rounded-lg shadow-md p-2 px-4 hover:bg-green-600 hover:text-yellow-300 transition duration-300 active:outline-2 outline-offset-2 outline-blue-500 hover:scale-105 "
							>
								<IoSearchSharp></IoSearchSharp>
								<p>Filtrar</p>
							</button>
						</div>
					</motion.form>
				)}
			</div>
			<div className="">
				<div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 auto-rows-min gap-4 p-4 overflow-hidden w-full ">
					<Container img={passatAmarelo}>
						<Titulo>Passat Surf</Titulo>
					</Container>
					<Container img={passatAmarelo}>
						<Titulo>Passat Surf</Titulo>
					</Container>
					<Container img={passatAmarelo}>
						<Titulo>Passat Surf</Titulo>
					</Container>
					<Container img={passatAmarelo}>
						<Titulo>Passat Surf</Titulo>
					</Container>
					<Container img={passatAmarelo}>
						<Titulo>Passat Surf</Titulo>
					</Container>
					<Container img={passatAmarelo}>
						<Titulo>Passat Surf</Titulo>
					</Container>
					<Container img={passatAmarelo}>
						<Titulo>Passat Surf</Titulo>
					</Container>
					<Container img={passatAmarelo}>
						<Titulo>Passat Surf</Titulo>
					</Container>
				</div>
			</div>
		</div>
	);
}

export default Carros;
