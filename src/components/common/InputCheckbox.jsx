function InputCheckbox({ nomeInput }) {
	return (
		<div className="flex items-center gap-2">
			<label className="font-medium text-gray-700">{nomeInput}</label>
			<input type="checkbox" className="size-4" />
		</div>
	);
}

export default InputCheckbox;
