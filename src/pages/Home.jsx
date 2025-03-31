import passatAmarelo from "../assets/images/passat-amarelo.jpg";
import rodaPorsche from "../assets/images/porsche-914.jpg";
import vbgLogo from "../assets/images/vbg-logo-row.png";
import Porcentagem from "../components/common/Porcentagem";
import Titulo from "../components/common/Titulo";
import Container from "../components/home/Container";

function Home() {
	return (
		<div className="transition-all duration-300 p-2 flex flex-1 min-w-0 items-center flex-col min-h-screen">
			<a
				href="https://www.instagram.com/vwbraziliangarage/"
				target="_blank"
				className="flex justify-center"
			>
				<img
					src={vbgLogo}
					alt="Logo da VBG"
					className="w-3/12 hover:scale-103 transition duration-300"
				/>
			</a>
			<div className="flex-1 overflow-y-auto">
				<div className="overflow-hidden grid grid-flow-col grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 auto-rows-fr gap-4	 w-full p-4 ">
					<Container img={passatAmarelo} className=" col-span-6 row-span-3">
						<Titulo>Carros</Titulo>
					</Container>
					<Container className="row-span-1 justify-between">
						<Titulo className="pb-0">Número de peças atuais</Titulo>
						<p className="text-8xl pb-3">54</p>
					</Container>
					<Container img={rodaPorsche} className="row-span-2">
						<Titulo>Peças</Titulo>
					</Container>
					<Container className="row-span-1 justify-between">
						<Titulo className="pb-0">Valor gasto no Ano</Titulo>
						<p className="text-8xl pb-3">54</p>
					</Container>
					<Container className="row-span-1 justify-between">
						<Titulo className="pb-0">Valor gasto no Mês</Titulo>
						<p>
							<span className="text-2xl pb-3">R$ </span>
							<span className="text-7xl pb-3">54,00</span>
						</p>
					</Container>
					<Container className="row-span-1 justify-between">
						<Titulo className="pb-0">Diferença com o mês passado</Titulo>
						<Porcentagem valor={54}></Porcentagem>
					</Container>
				</div>
			</div>
		</div>
	);
}

export default Home;
