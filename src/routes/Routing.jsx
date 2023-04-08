import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";
import MobileNavbar from "../components/MobileNavbar";

const Routing = () => {
	return (
		<div>
			<NavBar2 />
			<MobileNavbar />
			<Outlet />
			<Footer />
		</div>
	);
};
export default Routing;
