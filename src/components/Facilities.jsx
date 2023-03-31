import { ComputationalReaserchFacility } from "../constants";
import { ComputationalReaserchFacility_BriefDescreption } from "../constants";
import { ExperimentalFacilityText } from "../constants";

function Facilities() {
	return (
		<div className=" min-h-screen">
			<h1 className=" mt-16 mb-14 text-5xl">COMPUTATIONAL RESEARCH FACILITY</h1>
			<p className=" ml-[14rem] mr-[14rem] rounded-2xl border-2 bg-gray-50/50 p-[2rem] text-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
				{ComputationalReaserchFacility}
			</p>
			<h1 className=" mt-16 mb-14 text-5xl">Brief DESCRIPTION</h1>
			<h2 className="ml-40 text-left text-2xl underline ">Hardware : </h2>
			<p className="ml-[14rem] mr-[14rem] mb-20 mt-5 rounded-2xl border-2 bg-gray-50/50 p-[2rem] text-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
				{ComputationalReaserchFacility_BriefDescreption.Hardware}
			</p>
			<h2 className="ml-40 text-left text-2xl underline ">Software : </h2>
			<p className="ml-[14rem] mr-[14rem] mt-5 rounded-2xl border-2 bg-gray-50/50 p-[2rem] text-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
				{ComputationalReaserchFacility_BriefDescreption.Software}
			</p>
			<h1 className=" mt-16 mb-14 text-5xl">EXPERIMENTAL FACILITY</h1>
			<p className=" ml-[14rem] mr-[14rem] mb-5 rounded-2xl border-2 bg-gray-50/50 p-[2rem] text-2xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
				{ExperimentalFacilityText}
			</p>
			<div className="mb-20 mt-10 flex justify-around">
				<img
					className="h-1/12 w-1/4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
					src="/src/resources/images/facility/grating_setup.jpeg "
					alt="gratingsetup"
				/>
				<img
					className="h-1/12 w-1/4 shadow-[var(--base-shadow)]"
					src="/src/resources/images/facility/newtons_rings.jpeg"
					alt="gratingsetup"
				/>
				<img
					className="h-1/12 w-1/4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
					src="/src/resources/images/facility/spectrometer_setup.jpeg"
					alt="gratingsetup"
				/>
			</div>
		</div>
	);
}
export default Facilities;
