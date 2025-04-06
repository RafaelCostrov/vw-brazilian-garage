function InputDuplo({ nomeInput }) {
	return (
		<div className="flex flex-col">
			<label className="font-medium text-gray-700">{nomeInput}</label>
			<div className="flex gap-2">
				<input
					type="number"
					className="bg-slate-100 rounded-sm shadow-md border border-gray-300 w-20 focus:outline-2 outline-offset-2 outline-bandeira-azul-300 "
					placeholder="Min"
				/>
				<input
					type="number"
					className="bg-slate-100 rounded-sm shadow-md border border-gray-300 w-20 focus:outline-2 outline-offset-2 outline-bandeira-azul-300"
					placeholder="Max"
				/>
			</div>
		</div>
	);
}

export default InputDuplo;
