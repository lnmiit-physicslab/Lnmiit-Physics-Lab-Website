import React from 'react';
import { useState } from 'react';
import { Slider } from '../constants/Slider';

const OurVision = () => {
	const [index, setIndex]=useState(0);
	const leftHandler = () =>  {
		if(index<=0) setIndex(Slider.length-1);
		else setIndex(index-1);
	}
	const rightHandler = () => {
		if(index==Slider.length-1) setIndex(0);
		else setIndex(index+1);
	}
  const str=Slider[index].quote;
  return (
		<div>
			<div><p className='font-extrabold text-2xl'>OUR VISION</p></div>
			<div className='flex justify-center p-6'>
				<div className="font-semibold">
          <div class="slideshow-container">
            <div class="slide">{str}</div>
          </div>
          <div className='flex justify-center gap-[1rem]'>
            <button class="btn hover:bg-slate-200 w-10 h-10" onClick={leftHandler}>&#10094;</button>
            <button class="btn hover:bg-slate-200 w-10 h-10" onClick={rightHandler}>&#10095;</button>
          </div>
				</div>
			</div><br/>
		</div>
  )
}

export default OurVision