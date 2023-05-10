import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";
import MobileNavbar from "../components/MobileNavbar";
import Nav from "../components/Nav";
import NavBar from "../components/NavBar";

const Routing = ({ credits, setCredits }) => {
	return (
		<div>
			{/* <NavBar2 /> */}
			{/* <MobileNavbar /> */}
			{/* <Nav /> */}
			<NavBar/>
			<Outlet />
			<Footer credits={credits} setCredits={setCredits} />
		</div>
	);
};
export default Routing;
