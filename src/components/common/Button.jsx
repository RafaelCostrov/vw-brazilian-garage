function Button({ children, ...props }) {
	return (
		<button
			{...props}
			className="bg-amber-300 self-center flex items-center gap-2 rounded-lg shadow-md p-2 px-4 hover:bg-green-600 hover:text-yellow-300 transition duration-300 active:outline-2 outline-offset-2 outline-blue-500 hover:scale-105 "
		>
			{children}
		</button>
	);
}

export default Button;
