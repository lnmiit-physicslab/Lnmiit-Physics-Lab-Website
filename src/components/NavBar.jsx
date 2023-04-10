import Experiments from "../Experiments/Experiments";
import Videos from "./Videos";
import Facilities from "./Facilities";
import Faculty from "./Faculty";
import { Link } from "react-router-dom";
import "../css/navBar.css";


function NavBar() {
	function experiments() {
		<Experiments />;
	}
	function videos() {
		<Videos />;
	}
	function faculty() {
		<Faculty />;
	}
	function facilities() {
		<Facilities />;
	}
	return (
			<div className="grad invisible absolute z-10 h-[7vh] w-[100vw] text-white  md:visible ">
				<div className="flex justify-around p-4 text-lg font-bold">
					<div>
						<button
							onClick={experiments}
							className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150"
						>
							<Link to="/menu/experiments/Ex1theory">Experiments</Link>
						</button>
					</div>
					<div>
						<button
							onClick={videos}
							className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150  md:mr-36"
						>
							<Link to="/menu/videos">Videos</Link>
						</button>
					</div>
					<div>
						<button
							onClick={faculty}
							className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150"
						>
							<Link to="/menu/faculty">Faculty</Link>
						</button>
					</div>
					<div>
						<button
							onClick={facilities}
							className="hover:scale-110 hover:animate-pulse hover:text-indigo-900 hover:duration-150"
						>
							<Link to="/menu/facilities">Facilities</Link>
						</button>
					</div>
				</div>
			</div>

	);
}
export default NavBar;
