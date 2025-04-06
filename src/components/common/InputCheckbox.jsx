function InputCheckbox({ nomeInput, className, ...props }) {
	return (
		<div className={`flex gap-2 items-center ${className}`}>
			<label className="font-medium text-gray-700">{nomeInput}</label>
			<input type="checkbox" className="size-4" {...props} />
		</div>
	);
}

export default InputCheckbox;
