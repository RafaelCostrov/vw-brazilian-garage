function Container({ children, ...props }) {
	return (
		<div
			className={`col-span-3 bg-white shadow-md rounded-lg will-change-transform hover:scale-102 translate-z-0
				 transition duration-300 origin-center
				 p-3 flex flex-col items-center h-full  ${props.className}`}
		>
			{children}
			{props.img && (
				<div className="w-full flex-1 overflow-hidden">
					<img
						className="rounded-lg w-full h-full object-cover"
						src={props.img}
						alt={children}
					/>
				</div>
			)}
		</div>
	);
}

export default Container;
