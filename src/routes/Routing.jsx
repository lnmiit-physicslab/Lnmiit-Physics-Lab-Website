import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";

const Routing = () => {
	return (
		<div>
			<NavBar2 />
			<Outlet />
			<Footer />
		</div>
	);
};
export default Routing;
