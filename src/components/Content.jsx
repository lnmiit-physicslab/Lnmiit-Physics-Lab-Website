import React from "react";
import ContentInfo from "./ContentInfo";
import OurVision from "./OurVision";
import LabPhotos from "./LabPhotos";
const Content = () => {
	return (
		<div className="justify-around pl-0 pr-0 md:p-[6rem]">
			<OurVision /><br/>
			<ContentInfo /><br/>
			{/* <LabPhotos /> */}
			<div className="glow-on-hover -z-1 md:w-[56%] md:h-[5%] ml-5 textify grad mt-5 mr-5 mb-5 rounded-2xl  border-2 bg-gray-50/100 p-[2rem] text-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:ml-[22%] md:mr-[22%]">
				<h1 className="text-4xl text-zinc-200 font-extrabold">This is the link for the Lab Manual</h1>
				<a href="https://www.lnmiit.ac.in/Department/Physics/uploaded_files/lab-manual.pdf" target="_blank" className="text-2xl text-zinc-100 hover:underline">click here!</a>
				<br></br>
				<p className=" text-sm">(PS: Hover and then click anywhere to see effects)</p>
			</div>
		</div>
	);
};

export default Content;
