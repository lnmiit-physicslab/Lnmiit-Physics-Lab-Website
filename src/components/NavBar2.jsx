import { Link } from "react-router-dom";
import "../css/navBar.css";

const NavBar2 = () => {
	return (
		<div className="grad invisible z-10 h-[7vh] w-[100vw] text-white md:visible">
			<div className="flex justify-around p-4 text-lg font-bold">
				<div>
					<button className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150">
						<Link to="/menu/experiments/Ex1theory">Experiments</Link>
					</button>
				</div>
				<div>
					<button className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150  ">
						<Link to="/menu/videos">Videos</Link>
					</button>
				</div>
				<div>
					<button className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150">
						<Link to="/">Home</Link>
					</button>
				</div>
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
		</div>
	);
};
export default NavBar2;
