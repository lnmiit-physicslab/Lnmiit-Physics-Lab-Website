import React from "react";
import { img } from "../constants/img";
import { useState } from "react";

const LabPhotos = () => {
  const [index, setIndex]=useState(0);
	const leftHandler = () =>  {
		if(index<=0) setIndex(img.length-1);
		else setIndex(index-1);
	}
	const rightHandler = () => {
		if(index==img.length-1) setIndex(0);
		else setIndex(index+1);
	}
  return (
    <div>
      <div className="labPhotos p-10">
        <div><p className='font-extrabold text-2xl'>Physics Laboratory</p></div>
        <div className='flex justify-center  items-center m-4'>
          <div className="font-semibold  ">
              <div className="slide md:w-[800px] md:h-[450px]">
                <img src={img[index].link} className="md:w-[100%] md:h-[100%]"/>
            </div>
            <div className='flex justify-center gap-[1rem] pt-2'>
              <button class="btn hover:bg-slate-200 w-10 h-10" onClick={leftHandler}>&#10094;</button>
              <button class="btn hover:bg-slate-200 w-10 h-10" onClick={rightHandler}>&#10095;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabPhotos;
