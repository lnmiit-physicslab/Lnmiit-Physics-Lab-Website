import Experiments from "../Experiments/Experiments";
import Videos from "./Videos";
import Facilities from "./Facilities";
import Faculty from "./Faculty";
import { Link } from "react-router-dom";
import "../css/navBar.css";

//New imports
import React, { useState } from "react";
// import Logo from "../../assets/Logo.png";
import NavLinks from "./NavLinks";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className="z-50 grad">
			<div className="flex items-center justify-around font-medium">
				<div className="z-50 flex w-full justify-between p-5 md:w-auto">
					<Link to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-10 w-10 text-white"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
					</Link>{" "}
					<div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
						<ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
					</div>
				</div>
				<ul className="z-50 hidden items-center gap-8 font-[Poppins] uppercase md:flex">
					<li>
						<Link to="/" className="inline-block py-7 px-3 text-white">
							Home
						</Link>
					</li>
					<NavLinks />
					<li>
						<Link to="/menu/videos" className="inline-block py-7 px-3 text-white">
							Videos
						</Link>
					</li>
					<li>
						<Link to="/menu/faculty" className="inline-block py-7 px-3 text-white">
							Faculty
						</Link>
					</li>
					<li>
						<Link to="/menu/facilities" className="inline-block py-7 px-3 text-white">
							Facilites
						</Link>
					</li>
				</ul>
				<div className="hidden md:block">
					<a href="https://www.lnmiit.ac.in/">
						<img
							src="/resources/images/lnmiit_logo1_reduced.png"
							alt="LNMIIT Logo"
							className="h-[5rem] w-[12rem] p-3"
						></img>
					</a>
				</div>
				{/* Mobile nav */}
				<ul
					className={`
        fixed top-0 bottom-0 w-full overflow-y-auto bg-white py-24 pl-4 duration-500
        md:hidden ${open ? "left-0" : "left-[-100%]"}
        `}
				>
					<li>
						<Link to="/" className="ml-3 inline-block  w-full py-7 text-left">
							Home
						</Link>
					</li>
					<NavLinks />

					<li>
						<Link
							to="/menu/faculty"
							className="ml-3 inline-block w-full py-7 text-left"
						>
							Faculty
						</Link>
					</li>
					<li>
						<Link
							to="/menu/facilities"
							className="ml-3 inline-block w-full py-7 text-left"
						>
							Facilites
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
	// const  experiments = () => {
	// 	<Experiments />;
	// }
	// const videos = () => {
	// 	<Videos />;
	// };
	// const faculty = () => {
	// 	<Faculty />;
	// }
	// const facilities = () => {
	// 	<Facilities />;
	// }
	// return (
	// 	<div className="grad absolute z-10 h-[7vh] w-[100vw] text-white">
	// 		<div className="flex justify-around p-4 text-lg font-bold">
	// 			<div>
	// 				<button
	// 					onClick={experiments}
	// 					className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150"
	// 				>
	// 					<Link to="/menu/experiments/Ex2theory">Experiments</Link>
	// 				</button>
	// 			</div>
	// 			<div>
	// 				<button
	// 					onClick={videos}
	// 					className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150  md:mr-36"
	// 				>
	// 					<Link to="/menu/videos">Videos</Link>
	// 				</button>
	// 			</div>
	// 			<div>
	// 				<button
	// 					onClick={faculty}
	// 					className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150"
	// 				>
	// 					<Link to="/menu/faculty">Faculty</Link>
	// 				</button>
	// 			</div>
	// 			<div>
	// 				<button
	// 					onClick={facilities}
	// 					className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150"
	// 				>
	// 					<Link to="/menu/facilities">Facilities</Link>
	// 				</button>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
};
export default NavBar;
