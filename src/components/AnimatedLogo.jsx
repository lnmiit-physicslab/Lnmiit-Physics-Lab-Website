import "../css/AnimatedLogo.css";

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
			<div className="text-center select-none">
				<p className="text-4xl">UG Physics Laboratory</p>
				<p className="text-2xl">LNMIIT , Jaipur</p>
			</div>
		</div>
	);
};
export default AnimatedLogo;
