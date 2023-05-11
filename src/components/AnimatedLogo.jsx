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
			<div className="select-none text-center  pt-20 md:pt-0">
				<p className="hello-2 text-[80px]">UG Physics Laboratory</p>
				<p className="text-2xl -z-50 hello">LNMIIT , Jaipur</p>
			</div>
		</div>
	);
};
export default AnimatedLogo;
