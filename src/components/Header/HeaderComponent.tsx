

export default function HeaderComponent() {

	return (

		<header className="px-4 py-4 block">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="header-logo">
						<a href="">
							LOGO
						</a>
					</div>
					<nav className="">
						<ul className="flex flex-row gap-x-4">
							<li>
								<a href="" className="block py-2 px-4 hover:bg-slate-200">
									Cinema
								</a>
							</li>
							<li>
								<a href="" className="block py-2 px-4 hover:bg-slate-200">
									Festa
								</a>
							</li>
							<li>
								<a href="" className="block py-2 px-4 hover:bg-slate-200">
									Passeios
								</a>
							</li>
							<li>
								<a href="" className="block py-2 px-4 hover:bg-slate-200">
									Shows
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

	);

}