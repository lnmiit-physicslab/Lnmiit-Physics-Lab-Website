import React from "react";

export default function Ex9video() {
	return (
		<div className="flex flex-col justify-evenly tab-content m-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/100 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
			<h3>VIDEO</h3>
			<p align="center">
				<iframe
					// width="500vw"
					// height="280vh"
					className='video'
					src="https://www.youtube-nocookie.com/embed/w90jgVHoI8g?rel=0&showinfo=0"
					frameBorder={0}
					allow="autoplay; encrypted-media"
					allowFullScreen=""
				/>
			</p>
			<p align="center">
				<iframe
					// width="500vw"
					// height="280vh"
					className='video'
					src="https://www.youtube.com/embed/Y4ZuKgz_ui8"
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
}
