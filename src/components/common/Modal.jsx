import { motion, AnimatePresence } from "framer-motion";
import InputUnico from "./InputUnico";
import InputCheckbox from "./InputCheckbox";

function Modal({ isModalOpen, onClose }) {
	return (
		<AnimatePresence>
			{isModalOpen && (
				<motion.div
					className="fixed inset-0 flex items-center justify-center bg-black/50"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
				>
					<motion.div
						className="bg-white p-6 rounded-lg shadow-lg w-150 h-100 flex flex-col justify-between "
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						onClick={(e) => e.stopPropagation()} // Impede que o clique feche o modal ao clicar dentro
					>
						<h2 className="text-xl font-bold pb-4">
							Coloque as informações do carro a adicionar:
						</h2>
						<div className="flex flex-wrap justify-around ">
							<InputUnico
								nomeInput={"Marca"}
								type={"text"}
								className="w-5/12"
							></InputUnico>
							<InputUnico
								nomeInput={"Modelo"}
								type={"text"}
								className="w-5/12"
							></InputUnico>
							<InputUnico
								nomeInput={"Ano"}
								type={"number"}
								className="w-3/12"
							></InputUnico>
							<InputUnico
								nomeInput={"Cor"}
								type={"text"}
								className="w-5/12"
							></InputUnico>
							<InputUnico
								nomeInput={"Valor"}
								type={"number"}
								className="w-5/12"
							></InputUnico>
							<InputCheckbox nomeInput={"É sociedade?"}></InputCheckbox>
						</div>

						<p className="text-gray-600">
							Insira os detalhes do item que deseja adicionar.
						</p>
						<button
							className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
							onClick={onClose}
						>
							Fechar
						</button>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Modal;
