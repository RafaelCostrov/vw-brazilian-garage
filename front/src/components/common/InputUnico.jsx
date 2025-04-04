function InputUnico({ nomeInput, type, ...props }) {
	return (
		<div className="flex flex-col">
			<label className="font-medium text-gray-700">{nomeInput}</label>
			<input
				type={type}
				className={`bg-slate-100 rounded-sm shadow-md border border-gray-300 focus:outline-2 outline-offset-2 outline-bandeira-azul-300 ${props.className}`}
			/>
		</div>
	);
}

export default InputUnico;
