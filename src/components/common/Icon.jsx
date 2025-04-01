import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Icon({ ...props }) {
	const [sobreMouse, setSobreMouse] = useState(false);
	const [iconeVisivel, setIconeVisivel] = useState(true);
	return (
		<div
			className={`flex hover:scale-110 transition duration-300 hover:text-bandeira-verde-700 items-center cursor-pointer `}
			onMouseEnter={() => setSobreMouse(true)}
			onMouseLeave={() => setSobreMouse(false)}
			onClick={() => {
				if (props.onClickFilter) {
					props.onClickFilter();
				}
				if (props.onClickModal) {
					props.onClickModal();
				}
			}}
		>
			<AnimatePresence>
				{!sobreMouse && iconeVisivel && (
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0 }}
					>
						{props.isFiltered ? props.icon1 : props.icon2}
					</motion.span>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{sobreMouse && (
					<motion.div
						className="flex gap-2 items-center overflow-hidden"
						onAnimationComplete={() => setIconeVisivel(false)}
					>
						<AnimatePresence
							exitBeforeEnter
							onExitComplete={() => setIconeVisivel(true)}
						>
							<motion.p
								initial={{ opacity: 0, width: 0 }}
								animate={{ opacity: 1, width: "auto" }}
								exit={{ opacity: 0, width: 0 }}
								transition={{
									duration: 0.3,
									ease: "easeOut",
								}}
							>
								{" "}
								{props.texto}
							</motion.p>
						</AnimatePresence>
						<motion.span>
							{props.isFiltered ? props.icon1 : props.icon2}
						</motion.span>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default Icon;
