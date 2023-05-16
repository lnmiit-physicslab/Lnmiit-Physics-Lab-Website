import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = ({ open, setOpen }) => {
	const [heading, setHeading] = useState("");
	const [subHeading, setSubHeading] = useState("");
	return (
		<div className="text-white">
			{links.map((link) => (
				<div>
					<div className="group px-3 text-left md:cursor-pointer">
						<h1
							className="group flex items-center justify-between py-7 pr-5 md:pr-0"
							onClick={() => {
								heading !== link.name ? setHeading(link.name) : setHeading("");
								setSubHeading("");
							}}
						>
							{link.name}
							<span className="inline text-xl md:hidden">
								<ion-icon
									name={`${
										heading === link.name ? "chevron-up" : "chevron-down"
									}`}
								></ion-icon>
							</span>
							<span className="hidden text-xl group-hover:-mt-2 group-hover:rotate-180 md:mt-1 md:ml-2 md:block">
								<ion-icon name="chevron-down"></ion-icon>
							</span>
						</h1>
						{link.submenu && (
							<div className="text-black">
								<div className="absolute top-20 hidden hover:md:block group-hover:md:block">
									<div className="py-3">
										<div
											className="absolute left-3 mt-1 h-4 
                    w-4 rotate-45 bg-white"
										></div>
									</div>
									<div className="grid grid-cols-3 gap-10 bg-white p-5">
										{link.sublinks.map((mysublinks) => (
											<div>
												<h1 className="text-lg font-semibold">
													{mysublinks.Head}
												</h1>
												{mysublinks.sublink.map((slink) => (
													<li className="my-2.5 text-sm text-gray-600">
														<Link
															to={slink.link}
															className="hover:text-primary hover:underline"
														>
															{slink.name}
														</Link>
													</li>
												))}
											</div>
										))}
									</div>
								</div>
							</div>
						)}
					</div>
					{/* Mobile menus */}
					<div
						className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
					>
						{/* sublinks */}
						{link.sublinks.map((slinks) => (
							<div>
								<div>
									<h1
										onClick={() =>
											subHeading !== slinks.Head
												? setSubHeading(slinks.Head)
												: setSubHeading("")
										}
										className="flex items-center justify-between py-4 pl-7 pr-5  font-semibold  md:pr-0"
									>
										{slinks.Head}
										<span className="inline text-xl md:mt-1 md:ml-2">
											<ion-icon
												name={`${
													subHeading === slinks.Head
														? "chevron-up"
														: "chevron-down"
												}`}
											></ion-icon>
										</span>
									</h1>
									<div
										className={`${
											subHeading === slinks.Head ? "md:hidden" : "hidden"
										}`}
									>
										{slinks.sublink.map((slink) => (
											<li className="py-3 pl-14">
												<Link
													to={slink.link}
                            onClick={() => setOpen(false)} 
												>
													{slink.name}
												</Link>
											</li>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default NavLinks;
