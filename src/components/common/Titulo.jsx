function Titulo({ children, ...props }) {
	return (
		<h1 className={`font-extrabold text-lg pb-4 ${props.className}`}>
			{children}
		</h1>
	);
}

export default Titulo;
