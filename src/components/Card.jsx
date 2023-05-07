import "../css/card.css"
const Aditya = () => {
	return (
		<div className="tab-content md:m-20 min-h-screen flex  flex-wrap justify-evenly items-center rounded-3xl border-2 bg-gray-50/75 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
			<div id="Aditya" className="card flex flex-col justify-center gap-2 items-center">
				<div className="md:w-96 w-[90%]">
					<img
						src="/src/resources/images/Aditya.jpeg"
						className="rounded-2xl"
					/>
				</div>
				<div className="text-3xl">
					<h1>Aditya Chaudhary</h1>
				</div>
				<p>Y22 Batch</p>
				<div className="socialHandles mb-10 h-28">
					<div>
						<p className="text-center">Follow me on</p>
					</div>
					<div className="flex items-center gap-5">
						<span>
							<a href="https://twitter.com/13Aditya06" target="_blank">
								<img
									src="/src/resources/images/socialHandles/twitter.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a
								href="https://www.linkedin.com/in/aditya-chaudhary-763047249/"
								target="_blank"
							>
								<img
									src="/src/resources/images/socialHandles/linkedin.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://github.com/AdityaTheJaat" target="_blank">
								<img
									src="/src/resources/images/socialHandles/github.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a
								href="https://www.instagram.com/_adityathejaat_/"
								target="_blank"
							>
								<img
									src="/src/resources/images/socialHandles/instagram.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
					</div>
				</div>
			</div>
			<div id="Tushar" className="card flex flex-col justify-center gap-2 items-center">
				<div className="md:w-96 w-[90%]">
					<img src="/src/resources/images/Aditya.jpeg" className="rounded-2xl"/>
				</div>
				<div className="text-3xl">
					<h1>Tushar Sukhwal</h1>
				</div>
				<p>Y22 Batch</p>
				<div className="socialHandles mb-10 h-28">
					<div>
						<p className="text-center">Follow me on</p>
					</div>
					<div className="flex items-center gap-5">
						<span>
							<a href="https://www.facebook.com/lnmiit.ac.in/" target="_blank">
								<img
									src="/src/resources/images/socialHandles/facebook.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://twitter.com/Tushars_071" target="_blank">
								<img
									src="/src/resources/images/socialHandles/twitter.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a
								href="https://www.linkedin.com/in/tushar-sukhwal-57463a251/"
								target="_blank"
							>
								<img
									src="/src/resources/images/socialHandles/linkedin.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://github.com/Tushar-Sukhwal-7" target="_blank">
								<img
									src="/src/resources/images/socialHandles/github.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://www.instagram.com/Tushars_071/" target="_blank">
								<img
									src="/src/resources/images/socialHandles/instagram.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Aditya;
