function Container({ children, ...props }) {
	return (
		<div
			className={`col-span-3 row-span-3 bg-white shadow-lg rounded-lg scale-95 hover:scale-100 transition-transform duration-300 origin-center
				 p-3 flex flex-col items-center ${props.className}`}
		>
			<h1 className="text-lg font-bold pb-1">{children}</h1>
			{props.img ? (
				<div className="w-full flex-1 overflow-hidden">
					<img
						className="rounded-lg w-full h-full object-cover"
						src={props.img}
						alt={children}
					/>
				</div>
			) : (
				<div className="w-full h-full flex-1"></div>
			)}
		</div>
	);
}

export default Container;
