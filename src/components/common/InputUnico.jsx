function InputUnico({
	nomeInput,
	type,
	className,
	classNameLabel,
	htmlFor,
	...props
}) {
	return (
		<div className="flex flex-col">
			<label
				htmlFor={htmlFor}
				className={`font-medium text-gray-700 ${classNameLabel}`}
			>
				{nomeInput}
			</label>
			<input
				type={type}
				className={`bg-slate-100 rounded-sm shadow-md border border-gray-300 focus:outline-2 outline-offset-2 outline-bandeira-azul-300 pl-3${className}`}
				{...props}
			/>
		</div>
	);
}

export default InputUnico;
