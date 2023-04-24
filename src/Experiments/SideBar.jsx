import React, { useState } from "react";
import { experiments } from "../constants";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { useEffect } from "react";

const Sidebar = ({ setExNo, exNo, tab, setTab }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="App left-0 w-[20%]">
			<div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
				<button
					className={"sidebar__button"}
					onClick={() => setIsOpen(!isOpen)}
					className="text-slate-900 hover:scale-150 hover:cursor-pointer hover:duration-200"
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
				<ul>
					{experiments.map((item) => (
						<li key={item.id}>
							<div className={"sidebar__listItem"}>
								<FontAwesomeIcon className={"sidebar__icon"} icon={item.icon} />
								<CSSTransition
									in={isOpen}
									timeout={200}
									classNames={"fade"}
									unmountOnExit
								>
									<div
										className="cursor-pointer text-left text-slate-900 hover:scale-110 hover:cursor-pointer hover:duration-200"
										onClick={() => setExNo(item.id)}
									>{`${item.id}. ${item.name}`}</div>
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
