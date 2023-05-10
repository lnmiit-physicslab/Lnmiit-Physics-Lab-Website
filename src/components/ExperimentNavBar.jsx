import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const ExperimentNavBar = ({ tab, setTab, exNo, setExNo }) => {
	return (
		<div className="z-20 flex h-7 w-[100%] justify-around bg-gray-300">
			<Link
				to={`Ex${exNo}theory`}
				className="hover:animate-pulse hover:text-indigo-500 hover:duration-150"
				onClick={setTab("theory")}
			>
				Theory
			</Link>
			<Link
				to={`Ex${exNo}procedure`}
				className="hover:animate-pulse hover:text-indigo-500 hover:duration-150"
				onClick={setTab("procedure")}
			>
				Procedure
			</Link>
			<Link
				to={`Ex${exNo}video`}
				className="hover:animate-pulse hover:text-indigo-500 hover:duration-150"
				onClick={setTab("video")}
			>
				Video
			</Link>
			<Link
				to={`Ex${exNo}resources`}
				className="hover:animate-pulse hover:text-indigo-500 hover:duration-150"
				onClick={setTab("resources")}
			>
				Resources
			</Link>
			<Link
				to={`Ex${exNo}viva`}
				className="hover:animate-pulse hover:text-indigo-500 hover:duration-150"
				onClick={setTab("viva")}
			>
				Viva Voice
			</Link>
		</div>
	);
};

export default ExperimentNavBar;
