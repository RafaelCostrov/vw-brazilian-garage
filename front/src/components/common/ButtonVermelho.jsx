function ButtonVermelho({ children, ...props }) {
	return (
		<button
			{...props}
			className="bg-white border border-red-700 text-red-700 self-center flex items-center gap-2 rounded-lg shadow-md p-2 px-4 hover:bg-red-700 hover:text-white transition duration-300 active:outline-2 outline-offset-2 outline-red-700 hover:scale-105 "
		>
			{children}
		</button>
	);
}

export default ButtonVermelho;
