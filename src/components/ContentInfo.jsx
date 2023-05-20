import React from "react";
import "../css/content.css";

const ContentInfo = () => {
	return (
		<div className="flex flex-wrap">
			<div className=" 	flex flex-wrap items-center justify-around">
				<div className="aboutUS md:m-10 m-3 rounded-2xl bg-gray-50/75 p-3 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
					<p className=" text-2xl font-extrabold">ABOUT US</p>
					<br />
					<p className="para text-lg font-black font-semibold">
						Established in 2003 the undergraduate laboratory for 1st year B.Tech
						students is equipped with several experiments in different branches
						in Physics. The lab is divided into two sections, one is UG Physics
						Lab and the other is UG Physics Optics Lab. Laboratory work is a
						very important part of a course in General Physics. It reinforces
						the student's understanding of fundamental concepts and principles
						while, at the same time, helping the student to develop skill in
						carrying out scientific measurements. It is designed in such a way
						that the students can understand the basics of Physics through hands
						on experiments.
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
