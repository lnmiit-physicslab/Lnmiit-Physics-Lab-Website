import { Link } from "react-router-dom";
import "../css/navBar.css";

const NavBar2 = () => {
	return (
		<div className=" grad  z-10  w-[100vw] text-white flex flex-col items-center justify-center ">
			<div className="flex justify-around p-4 text-lg font-bold w-[100vw] ">
				<div>
					<button className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150">
						<Link to="/menu/experiments/Ex2theory">Experiments</Link>
					</button>
				</div>
				<div>
					<button className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150  ">
						<Link to="/menu/videos">Videos</Link>
					</button>
				</div>
				{/* <div>
					<button className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150">
						<Link to="/">Home</Link>
					</button>
				</div> */}
				<div>
					<button className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150">
						<Link to="/menu/faculty">Faculty</Link>
					</button>
				</div>
				<div>
					<button className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150">
						<Link to="/menu/facilities">Facilities</Link>
					</button>
				</div>
			</div>
			<Link to="/" >
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-10 w-10"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
				/>

			</svg>
			</Link>
		</div>
	);
};
export default NavBar2;
