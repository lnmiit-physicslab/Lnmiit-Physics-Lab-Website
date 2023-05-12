import React from "react";
import ExperimentNavBar from "../components/ExperimentNavBar";
import { Outlet } from "react-router-dom";

const Experiments = ({ setExNo, exNo, tab, setTab }) => {
	return (
		<div className="flex min-h-[70vh] flex-col sm:flex-row">
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Experiments;
