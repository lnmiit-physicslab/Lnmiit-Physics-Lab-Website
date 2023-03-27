import "./App.css";
import Footer from "./components/Footer";
import HeaderC from "./components/HeaderC";
import Content from "./components/Content";
import { Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import AnimatedLogo from "./components/AnimatedLogo";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div>
			<NavBar />
			<AnimatedLogo />
			<Content />
			<Footer />
		</div>
	);
}
export default App;
