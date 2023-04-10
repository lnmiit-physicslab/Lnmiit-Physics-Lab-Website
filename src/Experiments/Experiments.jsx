import React from "react";
import Sidebar from "./SideBar";
import ExperimentNavBar from "../components/ExperimentNavBar";

import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Experiments = ({ setExNo, exNo, tab, setTab }) => {
	return (
		<div className="flex">
			<Sidebar setExNo={setExNo} exNo={exNo} setTab={setTab} tab={tab} />
			<div>
				<ExperimentNavBar
					setExNo={setExNo}
					exNo={exNo}
					setTab={setTab}
					tab={tab}
				/>
				<Outlet />
			</div>
		</div>
	);
};

export default Experiments;
