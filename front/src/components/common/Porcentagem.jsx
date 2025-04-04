import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

function Porcentagem({ valor }) {
	const isPositive = valor > 0;
	const corTexto = isPositive ? "text-green-500" : "text-red-500";
	const Icone = isPositive ? TbTriangleFilled : TbTriangleInvertedFilled;

	return (
		<div className={`text-8xl pb-3 flex items-center gap-2 ${corTexto}`}>
			<Icone size={32} />
			{valor}%
		</div>
	);
}

export default Porcentagem;
