import React, { useState } from "react";
import { experiments } from "../constants";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { Link } from "react-router-dom";

const Sidebar = ({ setExNo, exNo, tab, setTab }) => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="App right-0 w-[20%] -mt-5 z-10 md:pt-20 ml-9 md:ml-0">
			<div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
				{/* <button
					className="{sidebar__button} vis"
					onClick={() => setIsOpen(!isOpen)}
					ClassName="text-slate-900 hover:scale-150 hover:cursor-pointer hover:duration-200"
				>
					<FontAwesomeIcon icon={faBars} />
				</button> */}
				<ul className="pt-4">
					{experiments.map((item) => (
						<li key={item.id}>
							<div className="{sidebar__listItem} rounded-3xl border-2 bg-gray-50/75 py-4 px-1  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
								<FontAwesomeIcon className={"sidebar__icon"} icon={item.icon} />
								<CSSTransition
									in={isOpen}
									timeout={200}
									classNames={"fade"}
									unmountOnExit
								>
									<Link
										to={`/menu/experiments/Ex${item.id}theory`}
										className="cursor-pointer text-left text-slate-900 hover:scale-110 hover:cursor-pointer hover:duration-200  "
										onClick={() => {setExNo(item.id);}}
									>{`${item.id}. ${item.name}`}</Link>
								</CSSTransition>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
