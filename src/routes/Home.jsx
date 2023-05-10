import NavBar from "../components/NavBar";
import AnimatedLogo from "../components/AnimatedLogo";
import Footer from "../components/Footer";
import Content from "../components/Content";
import MobileNavbar from "../components/MobileNavbar";
import Nav from "../components/Nav";

const Home = () => {
	return (
		<div>
			{/* <NavBar /> */}
			{/* <MobileNavbar /> */}
			{/* <Nav />  */}
			<NavBar/>
			<AnimatedLogo />
			<Content />
			<Footer />
		</div>
	);
};
export default Home;
