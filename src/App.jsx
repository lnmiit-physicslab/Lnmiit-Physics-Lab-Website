import "./App.css";
import Footer from "./components/Footer";
import HeaderC from "./components/HeaderC";
import Content from "./components/Content";

function App() {
	return (
		<div className="app relative">
			<div
				id="doubt"
				className="w-full h-full flex-col justify-center content-center flex-wrap gap-4 absolute z-10"
			>
				{/* Header Started*/}
				<HeaderC />
				{/* Header Closed */}

				{/* Content Started */}
				<Content />
				{/* Content Closed */}

				{/* Footer Started */}
				<Footer />
				{/* Footer Closed */}
			</div>
			<div className="absolute z-0">
				<img src="src/resources/images/background.png"></img>
				<img src="src/resources/images/background.png"></img>
			</div>
		</div>
	);
}
export default App;
