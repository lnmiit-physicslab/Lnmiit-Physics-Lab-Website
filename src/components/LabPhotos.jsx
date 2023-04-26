import React from "react";
import { img } from "../constants/img";
import { useState, useEffect } from "react";

const LabPhotos = () => {
	const [index, setIndex] = useState(0);
	// const leftHandler = () => {
	// 	if (index <= 0) setIndex(img.length - 1);
	// 	else setIndex(index - 1);
	// };
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
			<div className="labPhotos p-10 rounded-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-gray-50/75 w-[75%] m-auto">
				<div>
					<p className="text-2xl font-extrabold">Physics Laboratory</p>
				</div>
				<div className="m-4 flex  items-center justify-center">
					<div className="font-semibold  ">
						<div className="slide md:h-[450px] md:w-[800px]">
							<img src={img[index].link} className="md:h-[100%] md:w-[100%]" />
						</div>
						{/* <div className="flex justify-center gap-[1rem] pt-2">
							<button
								class="btn h-10 w-10 hover:bg-slate-200"
								onClick={leftHandler}
							>
								&#10094;
							</button>
							<button
								class="btn h-10 w-10 hover:bg-slate-200"
								onClick={rightHandler}
							>
								&#10095;
							</button>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LabPhotos;
