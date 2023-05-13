import React from "react";
import { img } from "../constants/img";
import { useState, useEffect } from "react";

const LabPhotos = () => {
	const [index, setIndex] = useState(0);
	const rightHandler = () => {
		if (index == img.length - 1) setIndex(0);
		else setIndex(index + 1);
	};
	useEffect(() => {
		const interval = setInterval(rightHandler, 2500);
		return () => clearInterval(interval);
	});
	return (
		<div>
			<div className="labPhotos m-4 md:p-8 rounded-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-gray-50/75 md:w-[75%] md:m-auto">
				<div>
					<p className="text-2xl font-extrabold">Physics Laboratory</p>
				</div>
				<div className="md:m-4 flex  items-center justify-center">
					<div className="font-semibold">
						<div className="slide md:h-[100%] md:w-[100%]">
							<img src={img[index].link} className="md:h-[100%] md:w-[100%] m-auto" />
						</div>
					</div>
				</div>
			</div>
			<br/>
		</div>
	);
};

export default LabPhotos;
