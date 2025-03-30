import passatAmarelo from "../assets/images/passat-amarelo.jpg";
import Container from "../components/home/Container";

function Carros() {
	return (
		<div className="transition-all duration-300 p-4 flex flex-1 min-w-0 h-dvh items-center flex-col">
			<h1 className=" text-2xl font-bold text-gray-900">Veiculos</h1>
			<div className="flex-1 overflow-y-auto">
				<div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 auto-rows-min  w-full ">
					<Container img={passatAmarelo}>Passat Surf</Container>
					<Container img={passatAmarelo}>Passat Surf</Container>
					<Container img={passatAmarelo}>Passat Surf</Container>
					<Container img={passatAmarelo}>Passat Surf</Container>
					<Container img={passatAmarelo}>Passat Surf</Container>
					<Container img={passatAmarelo}>Passat Surf</Container>
					<Container img={passatAmarelo}>Passat Surf</Container>
					<Container img={passatAmarelo}>Passat Surf</Container>
				</div>
			</div>
		</div>
	);
}

export default Carros;
