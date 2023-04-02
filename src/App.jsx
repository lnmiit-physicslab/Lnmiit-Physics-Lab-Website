import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import Home from "./routes/Home";
import Routing from "./routes/Routing";
import Experiments from "./Experiments/Experiments";
import Facilities from "./components/Facilities";
import Videos from "./components/Videos";
import Faculty from "./components/Faculty";

function App() {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="menu" element={<Routing />}>
					<Route path="experiments" element={<Experiments />} />
					<Route path="facilities" element={<Facilities />} />
					<Route path="faculty" element={<Faculty />} />
					<Route path="videos" element={<Videos />} />
				</Route>
			</Route>
		</Routes>
	);
}
export default App;
