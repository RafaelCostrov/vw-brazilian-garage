import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import ButtonAzul from "./ButtonAzul";
import InputUnico from "./InputUnico";
import InputDuplo from "./InputDuplo";
import InputCheckbox from "./InputCheckbox";
import ButtonVermelho from "./ButtonVermelho";

const sizes = {
	small: "w-3/10",
	medium: "w-4/10",
	large: "w-1/2",
	extraLarge: "w-6/10",
};

function Modal({ modalAtivo, onClose, title, size, children }) {
	const modalRef = useRef(null);
	const [clickInside, setClickInside] = useState(false);
	const handleMouseDown = (mouse) => {
		if (modalRef.current?.contains(mouse.target)) {
			setClickInside(true);
		} else {
			setClickInside(false);
		}
	};

	const handleMouseUp = () => {
		if (!clickInside) {
			onClose();
		}
	};

	return (
		<AnimatePresence>
			{modalAtivo !== null && (
				<motion.div
					className="fixed inset-0 flex items-center justify-center bg-black/50"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
				>
					<motion.div
						className={`relative bg-white p-6 rounded-lg shadow-lg ${sizes[size]} h-fit flex flex-col justify-between`}
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						ref={modalRef}
					>
						<button
							className="absolute top-0 right-0 m-1 opacity-50 hover:scale-130 cursor-pointer transition duration-300 hover:text-red-700 hover:opacity-100"
							onClick={onClose}
						>
							<IoIosClose size={24} />
						</button>
						<h2 className="text-xl font-bold pb-4 pt-1 border-b border-gray-200 mb-4">
							{title}
						</h2>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Modal;
