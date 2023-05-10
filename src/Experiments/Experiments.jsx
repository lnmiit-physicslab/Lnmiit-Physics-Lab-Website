import React from "react";
import Sidebar from "./SideBar";
import ExperimentNavBar from "../components/ExperimentNavBar";
import { Outlet } from "react-router-dom";

const Experiments = ({ setExNo, exNo, tab, setTab }) => {
	return (
		<div className="flex flex-col sm:flex-row">
			<div className="sidebar">
				<Sidebar setExNo={setExNo} exNo={exNo} setTab={setTab} tab={tab} />
			</div>
			<div>
				<ExperimentNavBar
					setExNo={setExNo}
					exNo={exNo}
					setTab={setTab}
					tab={tab}
				/>
				<Outlet/>
			</div>
		</div>
	);
};

export default Experiments;
