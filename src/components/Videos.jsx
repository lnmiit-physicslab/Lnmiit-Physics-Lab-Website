import { YtLinks } from "../constants";

function Videos() {
	return (
		<div className="main-wrapper">
			<div className="section1-wrapper m-10 rounded-3xl border-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  bg-gray-50/75">
				{/* section-1  */}

				<h1 className="pt-5 text-center text-5xl">Experiments</h1>
				<div className="    flex flex-wrap items-center  justify-center gap-10 pt-10  ">
					{YtLinks.filter((vid) => {
						return vid.heading === "Experiment";
					}).map((vid) => (
						<div className="mb-10 border-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
							<div
								key={vid.id}
								className="w-[420px] flex-col items-center justify-center  "
							>
								<iframe
									className=" rounded-lg align-middle"
									width="420"
									height="315"
									src={`https://youtube.com/embed/${vid.link}`}
								></iframe>
								<div className="">
									<p className="text-2xl font-bold">{vid.name}</p>
									<p className="mb-1 text-xl">{vid.teacher}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* section-2 */}

			<div className="section1-wrapper m-10 rounded-3xl border-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  bg-gray-50/75">
				<h1 className="pt-5 text-center text-5xl">Instrument</h1>
				<div className="    flex flex-wrap items-center  justify-center gap-10 pt-10  ">
					{YtLinks.filter((vid) => {
						return vid.heading === "Instrument";
					}).map((vid) => (
						<div className="mb-10 border-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
							<div
								key={vid.id}
								className=" w-[420px] flex-col items-center justify-center  "
							>
								<iframe
									className=" rounded-lg align-middle"
									width="420"
									height="315"
									src={`https://youtube.com/embed/${vid.link}`}
								></iframe>
								<div className="">
									<p className="text-2xl font-bold">{vid.name}</p>
									<p className="mb-1 text-xl">{vid.teacher}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* section-3 */}
			<div className="section1-wrapper m-10 rounded-3xl border-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  bg-gray-50/75">
				<h1 className="pt-5 text-center text-5xl">Graph</h1>
				<div className="    flex flex-wrap items-center  justify-center gap-10 pt-10  ">
					{YtLinks.filter((vid) => {
						return vid.heading === "Graph";
					}).map((vid) => (
						<div className="mb-10 border-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
							<div
								key={vid.id}
								className=" w-[420px] flex-col items-center justify-center  "
							>
								<iframe
									className=" rounded-lg align-middle"
									width="420"
									height="315"
									src={`https://youtube.com/embed/${vid.link}`}
								></iframe>
								<div className="">
									<p className="text-2xl font-bold">{vid.name}</p>
									<p className="mb-1 text-xl">{vid.teacher}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
export default Videos;
