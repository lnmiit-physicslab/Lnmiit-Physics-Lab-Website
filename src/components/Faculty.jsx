import { facultyMembers } from "../constants";
import React from "react";


function Faculty() {
	return <div className="min-h-screen mt-10">
		<h1 className="text-5xl text-center">Faculty Members</h1>
		<div className="flex flex-wrap ">
			{facultyMembers.map(fac=>(
				<div key={fac.id}>
					<img src='1.jpg' alt="a" />
					<h1>{fac.name}</h1>
					<h1>{fac.post}</h1>

				</div>

			))}
		</div>
	</div>;
}
export default Faculty;
