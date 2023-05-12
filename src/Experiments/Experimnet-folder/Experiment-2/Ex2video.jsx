import React from "react";

const Ex2video = () => {
	return (
		<div className="  tab-content m-10  flex mb-60 flex-col  rounded-3xl border-2 bg-gray-50/100 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
			<p align="center" >
				<span className="text-2xl text-left ">	1. Bar Pendulum Sited </span>
				<iframe
					// width="500vw"
					// height="280vh"
					className="video"
					src="https://www.youtube.com/embed/34VvJvlhvq0"
					frameBorder={0}
					allow="autoplay; encrypted-media"
					allowFullScreen=""
				/>
			</p>
			<p className="hidden md:invisible md:inline">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, vero
				architecto. Ullam doloribus consequatur sunt dolor nobis rem, culpa
				optio facere! Nostrum fugit, veritatis laudantium dolor eaque dicta
				saepe nam quibusdam 
			</p>
		</div>
	);
};

export default Ex2video;
