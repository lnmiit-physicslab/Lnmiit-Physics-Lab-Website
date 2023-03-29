import { Link } from "react-router-dom";

const NavBar2 = () => {
	return (
		<div className="w-[100vw] h-[7vh]  z-10">
			<div className="flex justify-around mt-7 p-4 text-lg font-bold">
				<div>
					<button className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400">
						<Link to="/menu/experiments">Experiments</Link>
					</button>
				</div>
				<div>
					<button className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400  ">
						<Link to="/menu/videos">Videos</Link>
					</button>
				</div>
				<div>
					<button className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400">
						<Link to="/">Home</Link>
					</button>
				</div>
				<div>
					<button className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400">
						<Link to="/menu/faculty">Faculty</Link>
					</button>
				</div>
				<div>
					<button className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400">
						<Link to="/menu/facilities">Facilities</Link>
					</button>
				</div>
			</div>
		</div>
	);
};
export default NavBar2;
