import React from "react";
import Sidebar from "./SideBar";
import ExperimentNavBar from "../components/ExperimentNavBar";

const Experiments = () => {
	return (
		<div className="flex">
			<Sidebar/>
			<ExperimentNavBar/>
		</div>
	);
};

export default Experiments;
