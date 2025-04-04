import rodaPorsche from "../assets/images/porsche-914.jpg";
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

function Pecas({
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
						title="Peças"
						buttons={
							<>
								<ButtonAzul>Editar</ButtonAzul>
								<ButtonVermelho>Apagar</ButtonVermelho>
							</>
						}
					></MenuSuperior>
					<MenuFiltro isFiltered={isFiltered} onClickFilter={onClickFilter}>
						<InputUnico nomeInput={"Nome"}></InputUnico>
						<InputDuplo nomeInput={"Quantidade"}></InputDuplo>
						<InputDuplo nomeInput={"Valor"}></InputDuplo>
					</MenuFiltro>
				</div>
				<AnimatePresence>
					<motion.div
						layout
						transition={{ duration: 0.4, ease: "easeInOut" }}
						className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 auto-rows-min gap-4 p-4 overflow-hidden w-full "
					>
						<Card img={rodaPorsche} onClick={() => onClickModal("detalhes")}>
							<Titulo>Roda Porsche 914</Titulo>
						</Card>
						<Card img={rodaPorsche} onClick={() => onClickModal("detalhes")}>
							<Titulo>Roda Porsche 914</Titulo>
						</Card>
						<Card img={rodaPorsche} onClick={() => onClickModal("detalhes")}>
							<Titulo>Roda Porsche 914</Titulo>
						</Card>
						<Card img={rodaPorsche} onClick={() => onClickModal("detalhes")}>
							<Titulo>Roda Porsche 914</Titulo>
						</Card>
						<Card img={rodaPorsche} onClick={() => onClickModal("detalhes")}>
							<Titulo>Roda Porsche 914</Titulo>
						</Card>
						<Card img={rodaPorsche} onClick={() => onClickModal("detalhes")}>
							<Titulo>Roda Porsche 914</Titulo>
						</Card>
						<Card img={rodaPorsche} onClick={() => onClickModal("detalhes")}>
							<Titulo>Roda Porsche 914</Titulo>
						</Card>
						<Card img={rodaPorsche} onClick={() => onClickModal("detalhes")}>
							<Titulo>Roda Porsche 914</Titulo>
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
					title="Detalhes da Peça"
					size={"medium"}
					img={rodaPorsche}
					nome={"Roda Porsche 914"}
					buttons={
						<>
							<ButtonAzul>Editar</ButtonAzul>
							<ButtonVermelho>Apagar</ButtonVermelho>
						</>
					}
				>
					<div className="flex flex-col max-w-fit justify-start space-y-20 px-5">
						<p>
							<span className="font-bold">Nome:</span> Roda Porsche 914
						</p>
						<p>
							<span className="font-bold">Descrição:</span> Roda 15"/6" 4 furos
						</p>
						<p>
							<span className="font-bold">Quantidade:</span> 4
						</p>
						<p>
							<span className="font-bold">Valor:</span> R$ 1.530,00
						</p>
					</div>
				</Modal>
			)}
		</>
	);
}

export default Pecas;
