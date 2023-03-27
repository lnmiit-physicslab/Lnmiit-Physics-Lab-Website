import Experiments from "./Experiments";
import Videos from "./Videos";
import Facilities from "./Facilities";
import Faculty from "./Faculty";
import { Link } from "react-router-dom";

function NavBar() {
	function experiments() {
		<Experiments />;
	}
	function videos() {
		<Videos />;
	}
	function faclulty() {
		<Faculty />;
	}
	function facilities() {
		<Facilities />;
		hello;
	}
	return (
		<div className="w-[100vw] h-[7vh] absolute z-10">
			<div className="flex justify-around mt-7 p-4 text-lg font-bold">
				<div>
					<button
						onClick={experiments}
						className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400"
					>
						<Link to="/menu/experiments">Experiments</Link>
					</button>
				</div>
				<div>
					<button
						onClick={videos}
						className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400  md:mr-36"
					>
						<Link to="/menu/videos">Videos</Link>
					</button>
				</div>
				<div>
					<button
						onClick={faclulty}
						className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400"
					>
						<Link to="/menu/faculty">Faculty</Link>
					</button>
				</div>
				<div>
					<button
						onClick={facilities}
						className="hover:animate-pulse hover:scale-110 hover:duration-150 hover:text-indigo-400"
					>
						<Link to="/menu/facilities">Facilities</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
export default NavBar;
