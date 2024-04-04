
import { Col, Row } from "antd"
import HeaderComponent from "./components/Header/HeaderComponent"

function App() {

	const dados_ficticios = [
		{
			title: "Semana Santa dos Milagres 2024",
			location: "Casa Marceneiro - Passo de Camaragibe, AL",
			date: "2024-04-07",
			category: "Show"
		},
		{
			title: "Alma Festival 24' @ Riocentro /RJ",
			location: "Riocentro - Rio de Janeiro, RJ",
			date: "2024-04-16",
			category: "Show"
		},
		{
			title: "FESTIVAL DE INVERNO BAHIA 2024",
			location: "Av. Siqueira Campos, 1320, Vitória da Conquista - Bahia",
			date: "2024-06-24",
			category: "Festival"
		},
		{
			title: "FESTIVAL DE INVERNO BAHIA 2024",
			location: "Av. Siqueira Campos, 1320, Vitória da Conquista - Bahia",
			date: "2024-06-24",
			category: "Festival"
		},
	];

	function formatDate(date: string) {
		const splited = date.split("-");
		/* const year = splited[0]; */
		const month = splited[1];
		const data = splited[2];
		return data + "/" + month;
	}

	return (
		<>

			<HeaderComponent />

			<div className="container mx-auto h-[600px] rounded-lg relative overflow-hidden">
				<div className="absolute brightness-50 bg-banner-home bg-cover bg-bottom h-full w-full -z-[1]"></div>
				<div className="flex align-center justify-center flex-col h-full">
					<div className="p-12 text-white h-max">
						<h1 className="font-bold text-4xl mb-4">
							ENCONTRE OS DIVERSOS EVENTOS
						</h1>
						<p className="mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus dolore voluptates! <br /> Alias unde nihil molestiae eveniet perspiciatis exercitationem, quam harum ipsum! <br /> Dolorem voluptatum non alias repellendus officiis maxime nobis.
						</p>
						<div className="py-2 px-1 bg-white rounded-full flex flex-row justify-between items-center w-max">
							<div className="flex-1 px-5">
								<input type="text" placeholder="Procurando algo novo?" className="w-full outline-none bg-transparent text-sm text-slate-500" />
							</div>
							<div className="flex flex-row gap-x-4 items-center">
								<div className="text-slate-500 gap-x-2 flex flex-row border-l-slate-400 border-l-[1px] px-3">
									<label htmlFor="" className="font-medium">
										Local
									</label>
									<select name="" id="" className="cursor-pointer">
										<option value="São Paulo">
											São Paulo
										</option>
									</select>
								</div>
								<div className="text-slate-500 gap-x-2 flex flex-row border-l-slate-400 border-l-[1px] px-3">
									<label htmlFor="" className="font-medium">
										Tipo
									</label>
									<select name="" id="" className="cursor-pointer">
										<option value="São Paulo">
											Shows
										</option>
									</select>
								</div>
								<div className=" border-l-slate-400 border-l-[1px] px-2">
									<button className="border-none bg-orange-500 font-medium px-6 py-2 rounded-full text-sm">
										Pesquisar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >

			<div className="container mx-auto my-12">
				<h2 className="font-bold text-3xl mb-1">
					Eventos próximos
				</h2>
				<Row gutter={[20, 0]}>
					{
						dados_ficticios.map(item => (
							<Col span={6}>
								<div className="py-6 ">
									<div className="h-52 mb-3 bg-slate-100 rounded-md overflow-hidden">
										<img src="images/banner-home.jpg" alt="" className="h-full w-full object-cover object-bottom" />
									</div>
									<div className="flex flex-row gap-x-2 items-center mb-1 justify-between">
										<p className="w-max text-orange-400 rounded-full font-medium text-xs">
											{item.category}
										</p>
										<p className="py-1 px-4 w-max bg-orange-50 text-orange-400 rounded-full font-medium text-xs">
											{formatDate(item.date)}
										</p>
									</div>
									<h6 className="font-medium">
										{item.title}
									</h6>
									<p>
										{item.location}
									</p>
								</div>
							</Col>
						))
					}
				</Row>
			</div>
		</>

	)
}

export default App
