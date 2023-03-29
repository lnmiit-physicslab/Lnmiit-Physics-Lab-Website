import { YtLinks } from "../constants";

function Videos() {
	return (
		<div>
			{/* section-1  */}

			<h1 className="text-5xl pt-5 text-center">Experiments</h1>
			<div className="   w-screen flex pt-10 flex-wrap  justify-around items-center  ">
				{YtLinks.filter((vid) => {
					return vid.heading === "Experiment";
				}).map((vid) => (
					<div className="border-2 mb-10">
						<div
							key={vid.id}
							className=" flex-col w-[420px] items-center justify-center "
						>
							<p>{vid.name}</p>
							<p>{vid.teacher}</p>
							<p></p>
							<iframe
								className=" align-middle flex"
								width="420"
								height="315"
								src={`https://youtube.com/embed/${vid.link}`}
							></iframe>
						</div>
					</div>
				))}
			</div>
			{/* section-2  */}
			<h1 className="text-5xl pt-5 text-center">Instrument</h1>
			<div className="   w-screen flex pt-10 flex-wrap  justify-around items-center  ">
				{YtLinks.filter((vid) => {
					return vid.heading === "Instrument";
				}).map((vid) => (
					<div className="border-2 mb-10">
						<div
							key={vid.id}
							className=" flex-col w-[420px] items-center justify-center "
						>
							<p>{vid.name}</p>
							<p>{vid.teacher}</p>
							<p></p>
							<iframe
								className=" align-middle flex"
								width="420"
								height="315"
								src={`https://youtube.com/embed/${vid.link}`}
							></iframe>
						</div>
					</div>
				))}
			</div>
			{/* section-3  */}
			<h1 className="text-5xl pt-5 text-center">Graph</h1>
			<div className="   w-screen flex pt-10 flex-wrap  justify-around items-center  ">
				{YtLinks.filter((vid) => {
					return vid.heading === "Graph";
				}).map((vid) => (
					<div className="border-2 mb-10">
						<div
							key={vid.id}
							className=" flex-col w-[420px] items-center justify-center "
						>
							<p>{vid.name}</p>
							<p>{vid.teacher}</p>
							<p></p>
							<iframe
								className=" align-middle flex"
								width="420"
								height="315"
								src={`https://youtube.com/embed/${vid.link}`}
							></iframe>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Videos;
