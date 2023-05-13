import { ComputationalReaserchFacility } from "../constants";
import { ComputationalReaserchFacility_BriefDescreption } from "../constants";
import { ExperimentalFacilityText } from "../constants";
import "../index.css";
import "../App.css";

function Facilities() {
	return (
		<div className=" min-h-screen z-0">
			<div className="glow-on-hover  -z-1 md:w-[56%] md:h-[5%] ml-5 textify grad mt-5 mr-5 mb-5 rounded-2xl  border-2 bg-gray-50/100 p-[2rem] text-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:ml-[22%] md:mr-[22%]">
				<h1 className="text-4xl text-zinc-200 font-extrabold">This is the link for the Lab Manual</h1>
				<a href="https://www.lnmiit.ac.in/Department/Physics/uploaded_files/lab-manual.pdf" target="_blank" className="text-2xl text-zinc-100 hover:underline">click here!</a>
				<br></br>
				<p className=" text-sm">(PS: Hover and then click anywhere to see effects)</p>
			</div>
			<div className="textify rounded-2xl p-5 md:p-0 py-5 flex flex-col justify-evenly bg-gray-50/75 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:ml-[22%] md:mr-[22%]">
				<h1 className="text-neutral-900 bg-lime-200 head text-4xl textify rounded-2xl bg-gray-50/100 p-[2rem] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">COMPUTATIONAL RESEARCH FACILITY</h1>
				<p className="textify rounded-2xl bg-gray-50/100 p-[2rem] text-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:ml-[22%] md:mr-[22%]">
					{ComputationalReaserchFacility}
				</p>
			</div>
			<br></br>
			<div className="textify rounded-2xl  py-5 flex flex-col justify-evenly bg-gray-50/75 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:ml-[22%] md:mr-[22%]">
				<h1 className="text-neutral-900 bg-lime-200 head text-4xl textify rounded-2xl bg-gray-50/100 p-[2rem] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">Brief DESCRIPTION</h1>
				<h2 className="text-2xl underline text-center">Hardware : </h2>
				<p className="ml-5 textify  mr-5 mb-20 mt-5  rounded-2xl border-2 bg-gray-50/100 p-[2rem] text-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:ml-[22%] md:mr-[22%]">
					{ComputationalReaserchFacility_BriefDescreption.Hardware}
				</p>
				<h2 className="text-center text-2xl underline ">Software : </h2>
				<p className="ml-5 textify mr-5 mt-5 rounded-2xl  border-2 bg-gray-50/100 p-[2rem] text-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:ml-[22%] md:mr-[22%]">
					{ComputationalReaserchFacility_BriefDescreption.Software}
				</p>
			</div>
			<br></br>
			<div className="textify rounded-2xl  py-5 flex flex-col justify-evenly bg-gray-50/75 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:ml-[22%] md:mr-[22%]">
				<h1 className="text-neutral-900 bg-lime-200 head text-4xl textify rounded-2xl bg-gray-50/100 p-[2rem] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">EXPERIMENTAL FACILITY</h1>
				<p className=" ml-5 textify mr-5 mb-5 rounded-2xl  border-2 bg-gray-50/100 p-[2rem] text-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:ml-[22%] md:mr-[22%]">
					{ExperimentalFacilityText}
				</p>
			</div>
			<div className="mb-20 mt-10 flex flex-wrap justify-around  bg-gray-50/100 pt-10 p-3 ">
				<div className="flex w-[350px] flex-col items-center justify-center pb-5 md:w-1/4 ">
					<img
						className=" shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl"
						src="/resources/images/facility/grating_setup.jpeg "
						alt="gratingsetup"
					/>
					<p className="pt-1 text-2xl">Diffraction Grating Setup </p>
				</div>

				<div className="flex w-[350px] flex-col  items-center justify-center pb-5 md:w-1/4">
					<img
						className=" shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl"
						src="/resources/images/facility/newtons_rings.jpeg "
						alt="gratingsetup"
					/>
					<p className="pt-1 text-2xl">Newton's Rings Setup </p>
				</div>

				<div className="flex w-[350px] flex-col items-center justify-center pb-5 md:w-1/4">
					<img
						className=" shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl"
						src="/resources/images/facility/spectrometer_setup.jpeg "
						alt="gratingsetup"
					/>
					<p className="pt-1 text-2xl">Spectrometer Setup</p>
				</div>
			</div>
		</div>
	);
}
export default Facilities;
