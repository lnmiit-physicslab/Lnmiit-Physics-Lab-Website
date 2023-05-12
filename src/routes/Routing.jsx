import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Routing = ({ credits, setCredits }) => {
	return (
		<div>
			<NavBar/>
			<Outlet />
			<Footer credits={credits} setCredits={setCredits} />
		</div>
	);
};
export default Routing;
