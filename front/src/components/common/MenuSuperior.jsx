import Icon from "./Icon";
import { FaFilter } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { IoSearchSharp, IoAddCircle } from "react-icons/io5";

function MenuSuperior({ isFiltered, onClickFilter, onClickModal, title }) {
	return (
		<div className="bg-white shadow-md rounded-lg flex justify-between p-4 w-full ">
			<h1 className=" text-2xl font-bold text-gray-900 self-center">{title}</h1>
			<div className="flex items-center gap-4 space-x-20 pr-4">
				<Icon
					onClick={() => onClickModal("adicionar")}
					icon1={<IoAddCircle className="size-7" />}
					icon2={<IoAddCircle className="size-7" />}
					texto={"Adicionar"}
				></Icon>
				<Icon
					isFiltered={isFiltered}
					onClick={onClickFilter}
					icon1={<FaFilterCircleXmark />}
					icon2={<FaFilter />}
					texto={"Filtrar"}
				></Icon>
			</div>
		</div>
	);
}

export default MenuSuperior;
