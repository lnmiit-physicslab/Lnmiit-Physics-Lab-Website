import React from "react";

const Ex2video = () => {
	return (
		<div className="tab-pane fade tab-content m-10 mt-10 flex min-h-screen flex-col justify-evenly rounded-3xl border-2 bg-gray-50/100 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
			<p align="center">
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
				saepe nam quibusdam consectetur reiciendis sit temporibus amet
				repudiandae harum debitis ullam ad accusantium officiis esse, corporis
				culpa omnis. Expedita illo aliquid saepe facere hic dolorum rem sapiente
				tempora dolores, natus dignissimos quos suscipit eum ut, nobis commodi
				numquam vero quidem fuga quia. Maiores, fugiat asperiores tempora nisi
				aperiam minima facilis error earum unde id? Quas, veritatis non, soluta
				aliquid quam sapiente doloribus hic labore nesciunt, illo obcaecati esse
				neque eligendi distinctio!
			</p>
		</div>
	);
};

export default Ex2video;
