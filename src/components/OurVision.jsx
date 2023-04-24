import React from "react";
import { useState } from "react";
import { Slider } from "../constants/Slider";

const OurVision = () => {
	const [index, setIndex] = useState(0);
	const leftHandler = () => {
		if (index <= 0) setIndex(Slider.length - 1);
		else setIndex(index - 1);
	};
	const rightHandler = () => {
		if (index == Slider.length - 1) setIndex(0);
		else setIndex(index + 1);
	};
	const str = Slider[index].quote;
	return (
		<div>
			<div>
				<p className="text-2xl font-extrabold">OUR VISION</p>
			</div>
			<div className="flex justify-center p-6">
				<div className="font-black font-semibold text-lg">
					<div class="slideshow-container">
						<div class="slide">{str}</div>
					</div>
					<div className="flex justify-center gap-[1rem]">
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
					</div>
				</div>
			</div>
			<br />
		</div>
	);
};

export default OurVision;
