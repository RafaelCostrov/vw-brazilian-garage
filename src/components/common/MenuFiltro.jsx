import { motion, AnimatePresence } from "framer-motion";
import ButtonAzul from "./ButtonAzul";
import { IoSearchSharp } from "react-icons/io5";

function MenuFiltro({ isFiltered, children }) {
	return (
		<AnimatePresence>
			{isFiltered && (
				<motion.form
					layout
					initial={{ opacity: 0, y: -20, height: "auto" }}
					animate={{ opacity: 1, y: 0, height: "auto" }}
					exit={{ opacity: 0, y: -20, height: "auto" }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					action=""
					method="get"
					className={`bg-white rounded-lg shadow-md p-4 pb-7 flex flex-col overflow-hidden
					}`}
				>
					<div className="flex justify-around">
						{children}
						<ButtonAzul type="submit">
							<IoSearchSharp></IoSearchSharp>
							<p>Filtrar</p>
						</ButtonAzul>
					</div>
				</motion.form>
			)}
		</AnimatePresence>
	);
}

export default MenuFiltro;
