const Aditya = () => {
	return (
		<div className="tab-content flex min-h-screen flex-wrap items-center justify-evenly rounded-3xl border-2 bg-gray-50/75 pt-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  md:m-20">
			<p className="text p-5 text-center font-bold">
				This is the newly developed website for the UG Physics Lab. Since we are
				only in our first year, there may be areas where we are falling short
				and encountering bugs on the website. It would be greatly appreciated if
				you could suggest some additional features that could be added to the
				site. If you would like to contribute to the website, you can do so by
				clicking on the{" "}
				<a
					href="https://github.com/lnmiit-physicslab/Lnmiit-Physics-Lab-Website"
					className=" text-orange-700 hover:underline"
					target="_blank"
				>
					Click Here!
				</a>{" "}
				link, which will take you directly to the lab website repository on
				Github. If your pull request is verified by one of us, it will be
				accepted and merged into the website. You can contact any of us by
				clicking on the social media handle icons below.
			</p>
			<div
				id="Aditya"
				className="card flex flex-col items-center justify-center gap-2"
			>
				<div className=" w-[90%] md:w-96">
					<img src="/resources/images/Aditya.jpeg" className="rounded-2xl w-[85%]  m-auto" />
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
						{/* <span>
							<a
								href="https://discord.com/AdityaTheJaat#4795"
								target="_blank"
							>
								<img
									src="/resources/images/socialHandles/discord.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span> */}
						<span>
							<a href="https://twitter.com/13Aditya06" target="_blank">
								<img
									src="/resources/images/socialHandles/twitter.svg"
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
									src="/resources/images/socialHandles/linkedin.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://github.com/AdityaTheJaat" target="_blank">
								<img
									src="/resources/images/socialHandles/github.svg"
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
									src="/resources/images/socialHandles/instagram.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
					</div>
				</div>
			</div>
			<div
				id="Tushar"
				className="card flex flex-col items-center justify-center gap-2"
			>
				<div className="w-[90%] md:w-96">
					<img src="/DSC_0349.jpg" className="rounded-2xl w-[100%] " />
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
						{/* <span>
							<a href="https://www.facebook.com/lnmiit.ac.in/" target="_blank">
								<img
									src="/resources/images/socialHandles/facebook.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span> */}
						<span>
							<a href="https://twitter.com/Tushars_071" target="_blank">
								<img
									src="/resources/images/socialHandles/twitter.svg"
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
									src="/resources/images/socialHandles/linkedin.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://github.com/Tushar-Sukhwal-7" target="_blank">
								<img
									src="/resources/images/socialHandles/github.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://www.instagram.com/Tushars_071/" target="_blank">
								<img
									src="/resources/images/socialHandles/instagram.svg"
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
