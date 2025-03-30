import passatAmarelo from "../assets/images/passat-amarelo.jpg";
import Container from "../components/home/Container";

function Home() {
	return (
		<div className="transition-all duration-300 p-6 flex flex-1 min-w-0 items-center flex-col">
			<h1 className=" text-2xl font-bold text-gray-900">Veiculos</h1>
			<div className="flex-1 overflow-y-auto">
				<div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 auto-rows-min gap-2 w-full ">
					<Container img={passatAmarelo}>Carros</Container>
					<Container>Peças</Container>
					<Container>Peças</Container>
					<Container>Peças</Container>
				</div>
			</div>
		</div>
	);
}

export default Home;
