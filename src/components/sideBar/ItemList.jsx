import { Link } from "react-router-dom";

function ItemList({ isOpen, ...props }) {
	return (
		<li className="w-full ">
			<Link
				to={props.link}
				className="w-full px-4 py-2 flex hover:bg-gray-900  hover:text-white "
			>
				<div
					className={`
            flex items-center 
			 transition-all duration-300
          `}
				>
					<props.icon size={24} className="flex-shrink-0" />
					<span
						className={`
              overflow-hidden whitespace-nowrap text-xl transition-[opacity,margin] duration-300
              ${isOpen ? "ml-4 opacity-100 w-auto" : "ml-0 opacity-0 w-0"}
            `}
					>
						{props.children}
					</span>
				</div>
			</Link>
		</li>
	);
}

export default ItemList;
