import React from "react";
import ContentInfo from "./ContentInfo";
import OurVision from "./OurVision";
import LabPhotos from "./LabPhotos";
const Content = () => {
	return (
		<div className="justify-around pl-0 pr-0 md:p-[6rem]">
			<OurVision />
			<ContentInfo />
			<LabPhotos />
		</div>
	);
};

export default Content;
