import { facultyMembers } from "../constants";
import React from "react";
import "../index.css";

function Faculty() {
	return (
		<div className=" m-3 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/100 pt-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  md:m-10">
			<h1 className="mb-7 text-center  text-3xl font-bold md:text-5xl">Faculty Members</h1>
			<div className="flex flex-wrap  justify-center ">
				{facultyMembers.map((fac) => (
					<div
						key={fac.id}
						className="flexify flex  w-[100%] items-center pl-7 pb-5 md:w-[40%]"
					>
						<img
							src={`/resources/images/faculty/${fac.id}.jpg`}
							alt=""
							className="h-56 w-56"
						/>
						<div className="text-left md:pl-2 md:pr-2 ">
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
