import React from "react";
import "../css/content.css";

const ContentInfo = () => {
	return (
		<div className="flex flex-wrap">
			<div className=" 	flex flex-wrap items-center justify-around">
				<div className="aboutUS m-3 rounded-2xl bg-gray-50/75 p-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:m-10">
					<p className=" text-2xl font-extrabold">ABOUT US</p>
					<br />
					<p className="para text-left text-lg font-black font-semibold">
						The undergraduate laboratory for first-year B.Tech students,
						established in 2003, is equipped with a variety of experiments
						spanning different branches of Physics. The lab is divided into two
						sections: the General physics experiment and the optics physics experiment. Engaging
						in laboratory work is an integral component of the General Physics
						course as it serves to strengthen students' comprehension of
						fundamental concepts and principles. Additionally, it aids in the
						development of practical skills required for conducting scientific
						measurements. The lab is thoughtfully designed to provide students
						with hands-on experimentation, enabling them to grasp the
						fundamentals of Physics.
					</p>
				</div>
				<div className=" absolute md:relative md:w-[45%]">
					<div className=" container  invisible relative  w-[350px]  rounded-3xl bg-gray-50/75 p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:visible  md:w-[100%]">
						<p className=" text-2xl font-extrabold">Time Table</p>
						<br />
						<table className=" ">
							<thead>
								<tr>
									<th>Column 1</th>
									<th>Column 2</th>
									<th>Column 3</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Cell 1</td>
									<td>Cell 2</td>
									<td>Cell 3</td>
								</tr>
								<tr>
									<td>Cell 1</td>
									<td>Cell 2</td>
									<td>Cell 3</td>
								</tr>
								<tr>
									<td>Cell 1</td>
									<td>Cell 2</td>
									<td>Cell 3</td>
								</tr>
								<tr>
									<td>Cell 1</td>
									<td>Cell 2</td>
									<td>Cell 3</td>
								</tr>
								<tr>
									<td>Cell 1</td>
									<td>Cell 2</td>
									<td>Cell 3</td>
								</tr>
								<tr>
									<td>Cell 1</td>
									<td>Cell 2</td>
									<td>Cell 3</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentInfo;
