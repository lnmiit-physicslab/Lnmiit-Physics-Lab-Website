import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Nav = () => {
	let Links = [
		{ name: "HOME", link: "/" },
		{ name: "Faculty", link: "/menu/faculty" },
		{ name: "Facilities", link: "/menu/facilities" },
		{ name: "Experiments", link: "/menu/experiments/Ex2theory" },
		{ name: "CONTACT", link: "/" },
	];
	let [open, setOpen] = useState(false);
	return (
		<div className="fixed top-0 left-0 z-50 w-full  shadow-md">
			<div className="items-center justify-between bg-white py-4 px-7 md:flex md:px-10">
			<Link to="/" >
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-10 w-10"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
				/>

			</svg>
			</Link>

				<div
					onClick={() => setOpen(!open)}
					className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
				>
					<ion-icon name={open ? "close" : "menu"}></ion-icon>
				</div>

				<ul
					className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
						open ? "top-20 " : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li key={link.name} className="my-7 text-xl md:my-0 md:ml-8">
							<Link
								to={link.link}
								className="text-gray-800 duration-500 hover:text-gray-400"
							>
								{link.name}
							</Link>
						</li>
					))}
					<Button>Get Started</Button>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
