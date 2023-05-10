import React from "react";
import Sidebar from "./SideBar";
import ExperimentNavBar from "../components/ExperimentNavBar";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Experiments = ({ setExNo, exNo, tab, setTab }) => {
	return (
		<div className="flex">
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
				<Nav />
				<Outlet />
			</div>
		</div>
	);
};

export default Experiments;
