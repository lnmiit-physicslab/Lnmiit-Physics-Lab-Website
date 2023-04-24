import { facultyMembers } from "../constants";
import React from "react";

function Faculty() {
	return (
		<div className="m-10 mt-10 min-h-screen rounded-3xl border-2 pt-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  bg-gray-50/75">
			<h1 className="mb-7 text-center text-5xl">Faculty Members</h1>
			<div className="flex flex-wrap items-center justify-center ">
				{facultyMembers.map((fac) => (
					<div
						key={fac.id}
						className="mr-10 ml-10 flex-col items-center justify-center pb-5"
					>
						<img
							src={`/src/resources/images/faculty/${fac.id}.jpg`}
							alt="a"
							className=" h-56 w-56 "
						/>
						<h1>{fac.name}</h1>
						<h1>{fac.post}</h1>
					</div>
				))}
			</div>
		</div>
	);
}
export default Faculty;
