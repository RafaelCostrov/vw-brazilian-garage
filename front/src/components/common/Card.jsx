import { useState } from "react";

function Card({ children, ...props }) {
	return (
		<div
			className={`col-span-3 bg-white shadow-md rounded-lg will-change-transform hover:scale-102 translate-z-0
				 transition duration-300 origin-center
				 p-3 flex flex-col items-center h-100% ${props.className}`}
			onClick={props.onClick}
		>
			{children}

			{props.img && (
				<div className="w-full flex-1 overflow-hidden relative">
					<img
						src={props.img}
						alt={children}
						className={`rounded-lg w-full h-40 object-cover transition-opacity duration-300 opacity-0"
						`}
					/>
				</div>
			)}
		</div>
	);
}

export default Card;
