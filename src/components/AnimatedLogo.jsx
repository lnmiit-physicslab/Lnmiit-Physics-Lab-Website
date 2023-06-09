import "../css/AnimatedLogo.css";
import "../css/typewrite.css";

const AnimatedLogo = () => {
	return (
		<div>
			<div id="atom">
				<div id="nucleus"></div>
				<div class="orbit">
					<div class="electron"></div>
				</div>
				<div class="orbit">
					<div class="electron"></div>
				</div>
				<div class="orbit">
					<div class="electron"></div>
				</div>
			</div>
			<div className="select-none text-center pt-20 md:pt-0">
				<p className="hello-2 md:text-[100px] text-6xl font-black text-orange-400 ">UG Physics Laboratory</p>
				<p className="md:text-3xl -z-50 hello text-xl font-bold text-lime-500">LNMIIT , Jaipur</p>
			</div>
		</div>
	);
};
export default AnimatedLogo;
