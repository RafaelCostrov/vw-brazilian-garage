import { Link } from "react-router-dom";
import vwBrazilianGarage from "../../assets/images/vbg-col-removebg-preview.png";
import vwBrazilianGarageLogo from "../../assets/images/vbg-logo.png";
import { FiMenu, FiChevronRight } from "react-icons/fi";
import { FaMoneyBill, FaInstagram } from "react-icons/fa";
import { FaCarRear, FaCarBattery } from "react-icons/fa6";
import ItemList from "./ItemList";

const SideBar = ({ isOpen, toggleSidebar }) => {
	return (
		<aside
			className={`absolute top-0 left-0 h-full transition-all duration-300 bg-white rounded-r-md text-gray-900 flex flex-col shadow-md space-y-5 items-center ${
				isOpen ? "w-64" : "w-16"
			}`}
		>
			<button
				onClick={toggleSidebar}
				className={`p-4 focus:outline-none ${
					isOpen
						? "justify-end flex"
						: "transition-all duration-300 justify-center flex"
				}`}
			>
				{isOpen ? (
					<FiChevronRight size={24} className="" />
				) : (
					<FiMenu size={24} />
				)}
			</button>
			<Link
				to={"/"}
				className={`flex items-center justify-center overflow-hidden transition-all duration-300 py-3 ${
					isOpen ? "flex-row" : "flex-col "
				}`}
			>
				<img
					src={vwBrazilianGarage}
					alt="logo da VW Brazilian Garage"
					className={`transition-all duration-300 ${
						isOpen ? "w-28 pt-6" : "w-16"
					}`}
				/>
				<img
					src={vwBrazilianGarageLogo}
					alt="logo da VW Brazilian Garage"
					className={`transition-[opacity,transform] duration-300 ${
						isOpen
							? "opacity-100 scale-100 w-28 delay-100"
							: "opacity-0 scale-80 w-0 "
					}`}
				/>
			</Link>
			<ul className=" flex flex-col  h-full mt-6 w-full pl-1 ">
				<ItemList isOpen={isOpen} link={"/carros"} icon={FaCarRear}>
					Carros
				</ItemList>
				<ItemList isOpen={isOpen} link={"/pecas"} icon={FaCarBattery}>
					Peças
				</ItemList>
				<ItemList isOpen={isOpen} link={"/valores"} icon={FaMoneyBill}>
					Ver valores
				</ItemList>
			</ul>
			<a
				href="https://www.instagram.com/vwbraziliangarage/"
				className="w-fit rounded-xl  hover:text-yellow-400 pb-5 transition duration-300"
				target="_blank"
			>
				<FaInstagram className="size-8" />
			</a>
		</aside>
	);
};

export default SideBar;
