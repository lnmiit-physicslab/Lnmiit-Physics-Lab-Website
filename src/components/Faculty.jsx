import { facultyMembers } from "../constants";
import React from "react";

function Faculty() {
	return (
		<div className="m-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/75 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
			<h1 className="mb-7 text-center text-5xl">Faculty Members</h1>
			<div className="flex flex-wrap items-center justify-center ">
				{facultyMembers.map((fac) => (
					<div key={fac.id} className=" flex w-[40%] items-center pb-5">
						<img
							src={`/src/resources/images/faculty/${fac.id}.jpg`}
							alt=""
							className="h-56 w-56"
						/>
						<div className="pl-2 pr-2 text-left ">
							<h1 className="text-xl font-semibold">{fac.name}</h1>
							<h1 className="pt-2">{fac.post}</h1>
							<p className="pt-2">{fac.degree}</p>
							<p className="pt-2 leading-5">
								<span className=" font-semibold ">Research Areas: </span>{" "}
								{fac.research}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Faculty;
