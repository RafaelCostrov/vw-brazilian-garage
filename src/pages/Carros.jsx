import passatAmarelo from "../assets/images/passat-amarelo.jpg";
import Container from "../components/home/Container";
import Titulo from "../components/common/Titulo";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { IoSearchSharp, IoAddCircle } from "react-icons/io5";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import InputUnico from "../components/common/InputUnico";
import InputDuplo from "../components/common/InputDuplo";
import InputCheckbox from "../components/common/InputCheckbox";

function Carros({ isFiltered, onClickFilter, onClickModal }) {
	return (
		<div className="transition-all duration-300  min-w-0 min-h-screen grid  auto-cols-fr auto-rows-min p-4 ">
			<div className="p-4 space-y-4">
				<div className="bg-white shadow-md rounded-lg flex justify-between p-4 w-full ">
					<h1 className=" text-2xl font-bold text-gray-900 self-center">
						Carros
					</h1>
					<div className="flex items-center gap-4 space-x-20 pr-4">
						<Icon
							onClickModal={onClickModal}
							icon1={<IoAddCircle className="size-7" />}
							icon2={<IoAddCircle className="size-7" />}
							texto={"Adicionar"}
						></Icon>
						<Icon
							isFiltered={isFiltered}
							onClickFilter={onClickFilter}
							icon1={<FaFilterCircleXmark />}
							icon2={<FaFilter />}
							texto={"Filtrar"}
						></Icon>
					</div>
				</div>
				<AnimatePresence>
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
							<div className="flex justify-around">
								<InputUnico nomeInput={"Marca/Modelo"}></InputUnico>
								<InputDuplo nomeInput={"Ano"}></InputDuplo>
								<InputDuplo nomeInput={"Valor"}></InputDuplo>
								<div className="flex flex-col items-center gap-2">
									<InputCheckbox
										nomeInput={"Apenas único dono"}
									></InputCheckbox>
									<InputCheckbox
										nomeInput={"Apenas com sociedade"}
									></InputCheckbox>
								</div>
								<Button type="submit">
									<IoSearchSharp></IoSearchSharp>
									<p>Filtrar</p>
								</Button>
							</div>
						</motion.form>
					)}
				</AnimatePresence>
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
