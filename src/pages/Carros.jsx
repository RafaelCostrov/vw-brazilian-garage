import passatAmarelo from "../assets/images/passat-amarelo.jpg";
import Container from "../components/home/Container";
import Titulo from "../components/common/Titulo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { IoSearchSharp, IoAddCircle } from "react-icons/io5";
import ButtonAzul from "../components/common/ButtonAzul";
import Icon from "../components/common/Icon";
import InputUnico from "../components/common/InputUnico";
import InputDuplo from "../components/common/InputDuplo";
import InputCheckbox from "../components/common/InputCheckbox";
import Modal from "../components/common/Modal";
import ButtonVermelho from "../components/common/ButtonVermelho";

function Carros({ isFiltered, onClickFilter }) {
	const [modalAtivo, setModalAtivo] = useState(null);
	console.log(modalAtivo);
	return (
		<>
			<div className="transition-all duration-300  min-w-0 min-h-screen grid  auto-cols-fr auto-rows-min p-4 ">
				<div className="p-4 space-y-4">
					<div className="bg-white shadow-md rounded-lg flex justify-between p-4 w-full ">
						<h1 className=" text-2xl font-bold text-gray-900 self-center">
							Carros
						</h1>
						<div className="flex items-center gap-4 space-x-20 pr-4">
							<Icon
								onClick={() => {
									setModalAtivo("adicionar");
								}}
								icon1={<IoAddCircle className="size-7" />}
								icon2={<IoAddCircle className="size-7" />}
								texto={"Adicionar"}
							></Icon>
							<Icon
								isFiltered={isFiltered}
								onClick={onClickFilter}
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
									<ButtonAzul type="submit">
										<IoSearchSharp></IoSearchSharp>
										<p>Filtrar</p>
									</ButtonAzul>
								</div>
							</motion.form>
						)}
					</AnimatePresence>
				</div>
				<div className="">
					<div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 auto-rows-min gap-4 p-4 overflow-hidden w-full ">
						<Container
							img={passatAmarelo}
							onClick={() => setModalAtivo("detalhes")}
						>
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
			{modalAtivo === "adicionar" && (
				<Modal
					onClose={() => setModalAtivo(null)}
					size={"small"}
					title={"Coloque as informações do carro que deseja adicionar:"}
				>
					<InputUnico nomeInput={"Marca"} type={"text"} className="w-10/12" />
					<InputUnico nomeInput={"Modelo"} type={"text"} className="w-10/12" />
					<InputUnico nomeInput={"Ano"} type={"number"} className="w-5/12" />
					<InputUnico nomeInput={"Cor"} type={"text"} className="w-10/12" />
					<InputUnico nomeInput={"Valor"} type={"number"} className="w-10/12" />
					<InputCheckbox nomeInput={"É sociedade?"} />
					<ButtonAzul className="self-center justify-center">
						Adicionar
					</ButtonAzul>
				</Modal>
			)}
			{modalAtivo === "detalhes" && (
				<Modal
					onClose={() => setModalAtivo(null)}
					title="Detalhes do Carro"
					size={"small"}
				>
					<p>
						<span className="font-bold">Marca:</span> Volkswagen
					</p>
					<p>
						<span className="font-bold">Modelo:</span> Passat Surf
					</p>
					<p>
						<span className="font-bold">Placa:</span> CRP-0380
					</p>
					<p>
						<span className="font-bold">Ano:</span> 1981
					</p>
					<p>
						<span className="font-bold">Cor:</span> Amarelo
					</p>
					<p>
						<span className="font-bold">Valor:</span> R$ 40.000,00
					</p>
					<p>
						<span className="font-bold">Propriedade:</span> Único dono
					</p>
					<div className="flex gap-4 mb-5">
						<span className="font-bold">Fotografia:</span>
						<img
							src={passatAmarelo}
							alt="Passat Surf Amarelo"
							className="rounded-lg size-6/12"
						/>
					</div>
					<div className="flex justify-center gap-4">
						<ButtonAzul>Editar</ButtonAzul>
						<ButtonVermelho>Apagar</ButtonVermelho>
					</div>
				</Modal>
			)}
		</>
	);
}

export default Carros;
