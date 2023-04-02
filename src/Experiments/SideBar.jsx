import React, { useState } from "react";
import { experiments } from "../constants";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faCompass,
	faUsers,
	faCogs,
	faServer,
	faCloud,
} from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";

const menuItems = [
	{ title: "Dashboard", icon: faCompass },
	{ title: "Users", icon: faUsers },
	{ title: "Cloud services", icon: faCloud },
	{ title: "Usage data", icon: faCogs },
	{ title: "Server list", icon: faServer },
];

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="left-0 w-[20%] App">
			<div className={cx("sidebar bg-gray-500", { "sidebar-closed": !isOpen })}>
				<button
					className={"sidebar__button"}
					onClick={() => setIsOpen(!isOpen)}
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
                  <div className="text-left">{`${item.id}. ${item.name}`}</div>
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
