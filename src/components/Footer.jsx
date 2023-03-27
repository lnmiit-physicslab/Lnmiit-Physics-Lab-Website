import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-wrap justify-around p-5 bg-gray-300 w-screen h-40 text-slate-900'>

            {/* Logo Container Started */}
            <div className='logo h-28'>
                <a href="https://www.lnmiit.ac.in/">
                    <img src="src/resources/images/lnmiit_logo1_reduced.png" alt="LNMIIT Logo" className='w-[12rem] h-[5rem] p-1'></img>    
                </a>
            </div>
            {/* Logo Container Closed */}

            {/* Social Handles Started */}
            <div className='socialHandles h-28'>
                <div><p className='text-center'>FOLLOW US</p></div>
                <br/>
                <div className='flex gap-5'>
                    <span>
                        <a href="https://www.facebook.com/lnmiit.ac.in/">
                            <img src='src/resources/images/socialHandles/facebook.svg' className='w-10'></img>
                        </a>
                    </span>
                    <span>
                        <a href="https://twitter.com/lnmiit_jaipur?lang=en">
                            <img src='src/resources/images/socialHandles/twitter.svg' className='w-10'></img>
                        </a>
                    </span>
                    <span>
                        <a href="https://www.linkedin.com/school/the-lnm-institute-of-information-technology/">
                            <img src='src/resources/images/socialHandles/linkedin.svg' className='w-10'></img>
                        </a>
                    </span>
                    <span>
                        <a href="https://www.youtube.com/channel/UCpC73hmoYHg55uyCz2Lti_w">
                            <img src='src/resources/images/socialHandles/youtube.svg' className='w-10'></img>
                        </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/lnmiit/">
                            <img src='src/resources/images/socialHandles/instagram.svg' className='w-10'></img>
                        </a>
                    </span>
                </div>
                <br/>
                {/* Website update time */}
                <p className='text-center font-light'>Last updated on 27-03-2023</p>
            </div>
            {/* Social Handles Closed */}

            {/* Copyright Section Started */}
            <div className='copyright h-28 w-48 text-xs'>
                <p>Copyright © 2018-2023 Department of Physics, LNMIIT. All Rights Reserved.</p>
                <br/>
                <p>Handcrafted with ❤️  by-<br/>
                    -<a href='' className='hover:cursor-pointer hover:duration-150 hover:font-extrabold'>Aditya Chaudhary (Y22) </a><br/>
                    -<a href='' className='hover:cursor-pointer hover:duration-150 hover:font-extrabold'>Tushar Sukhwal (Y22) </a><br/>
                    -<a href='' className='hover:cursor-pointer hover:duration-150 hover:font-extrabold'>Dhruv Chandak (Y22)</a><br/>
                </p>
            </div>
            {/* Copyright Section CLosed */}
        </div>
    )
}

export default Footer