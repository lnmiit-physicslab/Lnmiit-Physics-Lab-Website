import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<div className="site-footer flex w-screen flex-wrap items-center justify-around bg-gray-300 p-5 text-white ">
				{/* Logo Container Started */}
				<div className="logo h-28 ">
					<a href="https://www.lnmiit.ac.in/">
						<img
							src="/resources/images/lnmiit_logo1_reduced.png"
							alt="LNMIIT Logo"
							className="h-[5rem] w-[12rem] p-1"
						></img>
					</a>
				</div>
				{/* Logo Container Closed */}

				{/* Social Handles Started */}
				<div className="socialHandles mb-10 h-28">
					<div>
						<p className="text-center">FOLLOW US</p>
					</div>
					<br />
					<div className="flex items-center gap-5">
						<span>
							<a href="https://www.facebook.com/lnmiit.ac.in/">
								<img
									src="/resources/images/socialHandles/facebook.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://twitter.com/lnmiit_jaipur?lang=en">
								<img
									src="/resources/images/socialHandles/twitter.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://www.linkedin.com/school/the-lnm-institute-of-information-technology/">
								<img
									src="/resources/images/socialHandles/linkedin.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://www.youtube.com/channel/UCpC73hmoYHg55uyCz2Lti_w">
								<img
									src="/resources/images/socialHandles/youtube.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
						<span>
							<a href="https://www.instagram.com/lnmiit/">
								<img
									src="/resources/images/socialHandles/instagram.svg"
									className="w-10 hover:scale-125 hover:duration-200"
								></img>
							</a>
						</span>
					</div>
					<br />
					{/* Website update time */}
					<p className="text-center text-sm font-light">
						Last updated on 1st June 2023
					</p>
				</div>
				{/* Social Handles Closed */}

				{/* Copyright Section Started */}
				<div className="copyright h-24">
					<p className="text-base">
						Handcrafted with ❤️ by-
						<br /><p className="text-xl">Y22</p>-
						<Link
							to="/menu/Aditya"
							href=""
							className="font-extrabold hover:underline hover:cursor-pointer hover:font-extrabold hover:duration-150"
						>
							Aditya Chaudhary{" "}
						</Link>
						<br />-
						<Link
							to="/menu/Aditya"
							href=""
							className="font-extrabold hover:underline hover:cursor-pointer hover:font-extrabold hover:duration-150"
						>
							Tushar Sukhwal{" "}
						</Link><br></br>
						<Link to="/menu/Aditya" className="text-xs hover:underline">Click here to know more about contributors</Link>
					</p>
				</div>
				{/* Copyright Section CLosed */}
			</div>
			<p className="bg-slate-900 text-neutral-400">
				Copyright © 2023-2028 Department of Physics, LNMIIT. All Rights
				Reserved.
			</p>
		</div>
	);
};

export default Footer;
