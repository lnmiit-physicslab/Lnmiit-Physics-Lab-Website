import { Link } from "react-router-dom";

const MobileNavbar = () => {
	return (
		<div>
			<div class=" visible  md:hidden">
				<input id="toggle" type="checkbox" />

				<label class="toggle-container" for="toggle">
					<span class="button button-toggle"></span>
				</label>

				{/* <!-- The Nav Menu --> */}
				<nav class="nav">
					<Link to="/menu/experiments" className="nav-item">
						Experiments
					</Link>
					<Link to="/menu/videos" className="nav-item">
						Videos
					</Link>
					<Link to="/menu/faculty" className="nav-item">
						Faculty
					</Link>
					<Link to="/menu/facilities" className="nav-item">
						Facilities
					</Link>
					<Link to="/" className="nav-item">
						Home
					</Link>
				</nav>
			</div>
		</div>
	);
};
export default MobileNavbar;
