import passatAmarelo from "../assets/images/passat-amarelo.jpg";
import { motion, AnimatePresence } from "framer-motion";
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

function Carros({
	isFiltered,
	onClickFilter,
	modalAtivo,
	onClickModal,
	onCloseModal,
}) {
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
						<Card img={passatAmarelo} onClick={() => onClickModal("detalhes")}>
							<Titulo>Passat Surf</Titulo>
						</Card>
						<Card img={passatAmarelo} onClick={() => onClickModal("detalhes")}>
							<Titulo>Passat Surf</Titulo>
						</Card>
						<Card img={passatAmarelo} onClick={() => onClickModal("detalhes")}>
							<Titulo>Passat Surf</Titulo>
						</Card>
						<Card img={passatAmarelo} onClick={() => onClickModal("detalhes")}>
							<Titulo>Passat Surf</Titulo>
						</Card>
						<Card img={passatAmarelo} onClick={() => onClickModal("detalhes")}>
							<Titulo>Passat Surf</Titulo>
						</Card>
						<Card img={passatAmarelo} onClick={() => onClickModal("detalhes")}>
							<Titulo>Passat Surf</Titulo>
						</Card>
						<Card img={passatAmarelo} onClick={() => onClickModal("detalhes")}>
							<Titulo>Passat Surf</Titulo>
						</Card>
						<Card img={passatAmarelo} onClick={() => onClickModal("detalhes")}>
							<Titulo>Passat Surf</Titulo>
						</Card>
					</motion.div>
				</AnimatePresence>
			</section>
			{modalAtivo === "adicionar" && (
				<Modal
					onClose={() => onCloseModal()}
					size={"small"}
					title={"Coloque as informações do carro que deseja adicionar:"}
					buttons={
						<ButtonAzul className="self-center justify-center">
							Adicionar
						</ButtonAzul>
					}
				>
					<div className="grid grid-cols-2 auto-rows-auto gap-8 pb-8 pl-6">
						<InputUnico nomeInput={"Marca"} type={"text"} className="w-10/12" />
						<InputUnico
							nomeInput={"Modelo"}
							type={"text"}
							className="w-10/12"
						/>
						<InputUnico nomeInput={"Ano"} type={"number"} className="w-5/12" />
						<InputUnico nomeInput={"Cor"} type={"text"} className="w-10/12" />
						<InputUnico
							nomeInput={"Valor"}
							type={"number"}
							className="w-10/12"
						/>
						<InputCheckbox nomeInput={"É sociedade?"} />
					</div>
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
		</>
	);
}

export default Carros;
