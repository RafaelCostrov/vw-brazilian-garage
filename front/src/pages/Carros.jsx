import passatAmarelo from "../assets/images/passat-amarelo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, use } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PacmanLoader } from "react-spinners";
import Card from "../components/common/Card";
import Titulo from "../components/common/Titulo";
import InputUnico from "../components/common/InputUnico";
import InputDuplo from "../components/common/InputDuplo";
import InputCheckbox from "../components/common/InputCheckbox";
import Modal from "../components/common/Modal";
import ButtonAzul from "../components/common/ButtonAzul";
import ButtonVermelho from "../components/common/ButtonVermelho";
import MenuSuperior from "../components/common/MenuSuperior";
import MenuFiltro from "../components/common/MenuFiltro";
import React from "react";
import { IoIosClose } from "react-icons/io";

function Carros({
	isFiltered,
	onClickFilter,
	modalAtivo,
	onClickModal,
	onCloseModal,
	notifyAcerto,
	notifyErro,
}) {
	const [marca, setMarca] = useState("");
	const [modelo, setModelo] = useState("");
	const [placa, setPlaca] = useState("");
	const [ano, setAno] = useState("");
	const [cor, setCor] = useState("");
	const [valor, setValor] = useState("");
	const [sociedade, setSociedade] = useState(false);
	const [imagem, setImagem] = useState(null);
	const [loading, setLoading] = useState(false);
	const [carros, setCarros] = useState([]);

	useEffect(() => {
		fetch("/api/carros")
			.then(response => {
				if (!response.ok) {
					throw new Error("Erro ao buscar carros");
				}
				return response.json();
			})
			.then(data => setCarros(data))
			.catch(error => console.error("Erro:", error));
	}, []);
	console.log(carros);

	const handleAdicionarCarro = async () => {
		setLoading(true);

		const formData = new FormData();
		formData.append("marca", marca);
		formData.append("modelo", modelo);
		formData.append("placa", placa);
		formData.append("ano", ano);
		formData.append("cor", cor);
		formData.append("valor", valor);
		formData.append("sociedade", sociedade);
		if (imagem) {
			formData.append("imagem", imagem);
		}

		try {
			const response = await fetch("/api/carros", {
				method: "POST",
				body: formData,
			});

			const message = await response.text();

			if (response.ok) {
				notifyAcerto();
				onCloseModal();
			} else {
				toast.error(message || "Erro ao adicionar carro!");
			}
		} catch (error) {
			console.error(error);
			notifyErro();
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<section className="transition-all duration-300  min-w-0 min-h-screen grid  auto-cols-fr auto-rows-min p-4 ">
				<div className="p-4 space-y-4">
					<MenuSuperior
						isFiltered={isFiltered}
						onClickFilter={onClickFilter}
						onClickModal={onClickModal}
						title="Carros"
					></MenuSuperior>
					<MenuFiltro isFiltered={isFiltered} onClickFilter={onClickFilter}>
						<InputUnico nomeInput={"Marca/Modelo"}></InputUnico>
						<InputDuplo nomeInput={"Ano"}></InputDuplo>
						<InputDuplo nomeInput={"Valor"}></InputDuplo>
						<div className="flex flex-col items-center gap-2">
							<InputCheckbox nomeInput={"Apenas único dono"}></InputCheckbox>
							<InputCheckbox nomeInput={"Apenas com sociedade"}></InputCheckbox>
						</div>
					</MenuFiltro>
				</div>
				<AnimatePresence>
					<motion.div
						layout
						transition={{ duration: 0.4, ease: "easeInOut" }}
						className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 auto-rows-min gap-4 p-4 overflow-hidden w-full "
					>
						{carros.map(carro => (
							<Card
								key={carro.cod}
								onClick={() => onClickModal("detalhes")}
								img={`https://lh3.googleusercontent.com/d/${carro.imagemDrive}`}
								nome={carro.marca + " " + carro.modelo}
								ano={carro.ano}
								valor={carro.valor}
							>
								<Titulo>{carro.modelo}</Titulo>
							</Card>
						))}
					</motion.div>
				</AnimatePresence>
			</section>
			{modalAtivo === "adicionar" && (
				<Modal
					onClose={() => onCloseModal()}
					size={"large"}
					title={"Coloque as informações do carro que deseja adicionar:"}
				>
					<form
						onSubmit={e => {
							e.preventDefault();
							handleAdicionarCarro();
						}}
						className="grid grid-cols-3 gap-4 w-full"
					>
						<InputUnico
							nomeInput={"Marca"}
							type={"text"}
							required
							className="w-10/12"
							value={marca}
							onChange={e => setMarca(e.target.value)}
						/>
						<InputUnico
							nomeInput={"Modelo"}
							type={"text"}
							required
							className="w-10/12"
							value={modelo}
							onChange={e => setModelo(e.target.value)}
						/>
						<InputUnico
							nomeInput={"Placa"}
							type={"text"}
							className="w-10/12"
							value={placa}
							onChange={e => setPlaca(e.target.value)}
						/>
						<InputUnico
							nomeInput={"Ano"}
							type={"number"}
							required
							className="w-5/12"
							value={ano}
							onChange={e => setAno(e.target.value)}
						/>
						<InputUnico
							nomeInput={"Cor"}
							type={"text"}
							required
							className="w-10/12"
							value={cor}
							onChange={e => setCor(e.target.value)}
						/>
						<InputUnico
							nomeInput={"Valor"}
							type={"number"}
							required
							className="w-10/12"
							value={valor}
							onChange={e => setValor(e.target.value)}
						/>
						<InputCheckbox
							nomeInput={"É sociedade?"}
							checked={sociedade}
							onChange={e => setSociedade(e.target.checked)}
							className={"self-start"}
						/>
						<div className="relative flex flex-col gap-3">
							<InputUnico
								nomeInput={"Imagem"}
								htmlFor="upload"
								id="upload"
								type={"file"}
								required
								accept="image/*"
								onChange={e => setImagem(e.target.files?.[0] || null)}
								className="w-10/12 hidden"
								classNameLabel="cursor-pointer p-0.5 px-2 bg-slate-100 rounded-sm shadow-md border border-gray-300 w-fit"
							/>
							{imagem && (
								<div className="relative w-9/12 flex flex-col items-center justify-end pb-4">
									<img
										src={URL.createObjectURL(imagem)}
										alt="Preview"
										className="rounded-lg h-fit w-fit object-cover border shadow"
									/>
									<button
										type="button"
										onClick={() => setImagem(null)}
										className="absolute top-1 right-1 bg-yellow-50 rounded-lg text-gray-400 hover:text-red-700 transition duration-300 hover:scale-110 cursor-pointer"
									>
										<IoIosClose size={24} />
									</button>
								</div>
							)}
						</div>
						<ButtonAzul type="submit" className="justify-center w-5/12">
							Adicionar
						</ButtonAzul>
					</form>
				</Modal>
			)}
			{modalAtivo === "detalhes" && (
				<Modal
					onClose={() => onCloseModal()}
					title="Detalhes do Carro"
					size={"large"}
					img={passatAmarelo}
					nome={"Passat Surf"}
					buttons={
						<>
							<ButtonAzul>Editar</ButtonAzul>
							<ButtonVermelho>Apagar</ButtonVermelho>
						</>
					}
				>
					<div className="flex flex-col max-w-fit justify-start space-y-10 px-5">
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
					</div>
				</Modal>
			)}
			{loading && (
				<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
					<PacmanLoader color="#462dd5" size={25} />
				</div>
			)}
		</>
	);
}

export default Carros;
