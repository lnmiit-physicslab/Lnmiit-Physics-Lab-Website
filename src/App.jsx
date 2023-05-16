import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./routes/Home";
import Routing from "./routes/Routing";
import Experiments from "./Experiments/Experiments";
import Facilities from "./components/Facilities";
import Videos from "./components/Videos";
import Faculty from "./components/Faculty";
import Contact from "./components/Contact";
// import Ex1theory from "./Experiments/Experimnet-folder/Experiment-1/Ex1theory";
// import Ex1video from "./Experiments/Experimnet-folder/Experiment-1/Ex1video";
// import Ex1procedure from "./Experiments/Experimnet-folder/Experiment-1/Ex1procedure";
// import Ex1viva from "./Experiments/Experimnet-folder/Experiment-1/Ex1viva";
// import Ex1resources from "./Experiments/Experimnet-folder/Experiment-1/Ex1resources";
import Ex2theory from "./Experiments/Experimnet-folder/Experiment-2/Ex2theory";
import Ex2video from "./Experiments/Experimnet-folder/Experiment-2/Ex2video";
import Ex2procedure from "./Experiments/Experimnet-folder/Experiment-2/Ex2procedure";
import Ex2viva from "./Experiments/Experimnet-folder/Experiment-2/Ex2viva";
import Ex2resources from "./Experiments/Experimnet-folder/Experiment-2/Ex2resources";
import Ex3theory from "./Experiments/Experimnet-folder/Experiment-3/Ex3theory";
import Ex3video from "./Experiments/Experimnet-folder/Experiment-3/Ex3video";
import Ex3procedure from "./Experiments/Experimnet-folder/Experiment-3/Ex3procedure";
import Ex3viva from "./Experiments/Experimnet-folder/Experiment-3/Ex3viva";
import Ex3resources from "./Experiments/Experimnet-folder/Experiment-3/Ex3resources";
import Ex4theory from "./Experiments/Experimnet-folder/Experiment-4/Ex4theory";
import Ex4video from "./Experiments/Experimnet-folder/Experiment-4/Ex4video";
import Ex4procedure from "./Experiments/Experimnet-folder/Experiment-4/Ex4procedure";
import Ex4viva from "./Experiments/Experimnet-folder/Experiment-4/Ex4viva";
import Ex4resources from "./Experiments/Experimnet-folder/Experiment-4/Ex4resources";
import Ex5theory from "./Experiments/Experimnet-folder/Experiment-5/Ex5theory";
import Ex5video from "./Experiments/Experimnet-folder/Experiment-5/Ex5video";
import Ex5procedure from "./Experiments/Experimnet-folder/Experiment-5/Ex5procedure";
import Ex5viva from "./Experiments/Experimnet-folder/Experiment-5/Ex5viva";
import Ex5resources from "./Experiments/Experimnet-folder/Experiment-5/Ex5resources";
import Ex6theory from "./Experiments/Experimnet-folder/Experiment-6/Ex6theory";
import Ex6video from "./Experiments/Experimnet-folder/Experiment-6/Ex6video";
import Ex6procedure from "./Experiments/Experimnet-folder/Experiment-6/Ex6procedure";
import Ex6viva from "./Experiments/Experimnet-folder/Experiment-6/Ex6viva";
import Ex6resources from "./Experiments/Experimnet-folder/Experiment-6/Ex6resources";
import Ex7theory from "./Experiments/Experimnet-folder/Experiment-7/Ex7theory";
import Ex7video from "./Experiments/Experimnet-folder/Experiment-7/Ex7video";
import Ex7procedure from "./Experiments/Experimnet-folder/Experiment-7/Ex7procedure";
import Ex7viva from "./Experiments/Experimnet-folder/Experiment-7/Ex7viva";
import Ex7resources from "./Experiments/Experimnet-folder/Experiment-7/Ex7resources";
import Ex8theory from "./Experiments/Experimnet-folder/Experiment-8/Ex8theory";
import Ex8video from "./Experiments/Experimnet-folder/Experiment-8/Ex8video";
import Ex8procedure from "./Experiments/Experimnet-folder/Experiment-8/Ex8procedure";
import Ex8viva from "./Experiments/Experimnet-folder/Experiment-8/Ex8viva";
import Ex8resources from "./Experiments/Experimnet-folder/Experiment-8/Ex8resources";
import Ex9theory from "./Experiments/Experimnet-folder/Experiment-9/Ex9theory";
import Ex9video from "./Experiments/Experimnet-folder/Experiment-9/Ex9video";
import Ex9procedure from "./Experiments/Experimnet-folder/Experiment-9/Ex9procedure";
import Ex9viva from "./Experiments/Experimnet-folder/Experiment-9/Ex9viva";
import Ex9resources from "./Experiments/Experimnet-folder/Experiment-9/Ex9resources";
import Ex10theory from "./Experiments/Experimnet-folder/Experiment-10/Ex10theory";
import Ex10video from "./Experiments/Experimnet-folder/Experiment-10/Ex10video";
import Ex10procedure from "./Experiments/Experimnet-folder/Experiment-10/Ex10procedure";
import Ex10viva from "./Experiments/Experimnet-folder/Experiment-10/Ex10viva";
import Ex10resources from "./Experiments/Experimnet-folder/Experiment-10/Ex10resources";
import Ex11theory from "./Experiments/Experimnet-folder/Experiment-11/Ex11theory";
import Ex11video from "./Experiments/Experimnet-folder/Experiment-11/Ex11video";
import Ex11procedure from "./Experiments/Experimnet-folder/Experiment-11/Ex11procedure";
import Ex11viva from "./Experiments/Experimnet-folder/Experiment-11/Ex11viva";
import Ex11resources from "./Experiments/Experimnet-folder/Experiment-11/Ex11resources";
import "./index.css";
import Card from "./components/Card";


function App() {
	const [exNo, setExNo] = useState(2);
	const [tab, setTab] = useState("Theory");

	return (
		<div className="very-main-wrapper">
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="menu" element={<Routing />}>
						<Route
							path="experiments"
							element={
								<Experiments
									exNo={exNo}
									setExNo={setExNo}
									tab={tab}
									setTab={setTab}
								/>
							}
						>
							{/* <Route path="Ex1theory" element={<Ex1theory />} />
							<Route path="Ex1video" element={<Ex1video />} />
							<Route path="Ex1resources" element={<Ex1resources />} />
							<Route path="Ex1procedure" element={<Ex1procedure />} />
							<Route path="Ex1viva" element={<Ex1viva />} /> */}
							<Route path="Ex2theory" element={<Ex2theory />} />
							<Route path="Ex2video" element={<Ex2video />} />
							<Route path="Ex2resources" element={<Ex2resources />} />
							<Route path="Ex2procedure" element={<Ex2procedure />} />
							<Route path="Ex2viva" element={<Ex2viva />} />
							<Route path="Ex3theory" element={<Ex3theory />} />
							<Route path="Ex3video" element={<Ex3video />} />
							<Route path="Ex3resources" element={<Ex3resources />} />
							<Route path="Ex3procedure" element={<Ex3procedure />} />
							<Route path="Ex3viva" element={<Ex3viva />} />
							<Route path="Ex4theory" element={<Ex4theory />} />
							<Route path="Ex4video" element={<Ex4video />} />
							<Route path="Ex4resources" element={<Ex4resources />} />
							<Route path="Ex4procedure" element={<Ex4procedure />} />
							<Route path="Ex4viva" element={<Ex4viva />} />
							<Route path="Ex5theory" element={<Ex5theory />} />
							<Route path="Ex5video" element={<Ex5video />} />
							<Route path="Ex5resources" element={<Ex5resources />} />
							<Route path="Ex5procedure" element={<Ex5procedure />} />
							<Route path="Ex5viva" element={<Ex5viva />} />
							<Route path="Ex6theory" element={<Ex6theory />} />
							<Route path="Ex6video" element={<Ex6video />} />
							<Route path="Ex6resources" element={<Ex6resources />} />
							<Route path="Ex6procedure" element={<Ex6procedure />} />
							<Route path="Ex6viva" element={<Ex6viva />} />
							<Route path="Ex7theory" element={<Ex7theory />} />
							<Route path="Ex7video" element={<Ex7video />} />
							<Route path="Ex7resources" element={<Ex7resources />} />
							<Route path="Ex7procedure" element={<Ex7procedure />} />
							<Route path="Ex7viva" element={<Ex7viva />} />
							<Route path="Ex8theory" element={<Ex8theory />} />
							<Route path="Ex8video" element={<Ex8video />} />
							<Route path="Ex8resources" element={<Ex8resources />} />
							<Route path="Ex8procedure" element={<Ex8procedure />} />
							<Route path="Ex8viva" element={<Ex8viva />} />
							<Route path="Ex9theory" element={<Ex9theory />} />
							<Route path="Ex9video" element={<Ex9video />} />
							<Route path="Ex9resources" element={<Ex9resources />} />
							<Route path="Ex9procedure" element={<Ex9procedure />} />
							<Route path="Ex9viva" element={<Ex9viva />} />
							<Route path="Ex10theory" element={<Ex10theory />} />
							<Route path="Ex10video" element={<Ex10video />} />
							<Route path="Ex10resources" element={<Ex10resources />} />
							<Route path="Ex10procedure" element={<Ex10procedure />} />
							<Route path="Ex10viva" element={<Ex10viva />} />
							<Route path="Ex11theory" element={<Ex11theory />} />
							<Route path="Ex11video" element={<Ex11video />} />
							<Route path="Ex11resources" element={<Ex11resources />} />
							<Route path="Ex11procedure" element={<Ex11procedure />} />
							<Route path="Ex11viva" element={<Ex11viva />} />
						</Route>
						<Route path="facilities" element={<Facilities />} />
						<Route path="faculty" element={<Faculty />} />
						<Route path="videos" element={<Videos />} />
						<Route path="contact" element={<Contact />} />
						<Route path="Aditya" element={<Card />}/>
						<Route path="Aditya" element={<Card />}/>
					</Route>
				</Route>
			</Routes>
		</div>
	);
}
export default App;