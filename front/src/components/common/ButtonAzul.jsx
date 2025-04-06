function ButtonAzul({ children, ...props }) {
	return (
		<button
			{...props}
			className={`bg-white border border-bandeira-azul-700 h-fit flex items-center gap-2 rounded-lg shadow-md p-2 px-4 hover:bg-bandeira-azul-700 hover:text-white transition duration-300 active:outline-2 outline-offset-2 outline-bandeira-azul-700 hover:scale-105 ${props.className}`}
		>
			{children}
		</button>
	);
}

export default ButtonAzul;
