import React from 'react'

const Footer = () => {
    return (
        <div className='flex content-center justify-center gap-48 p-5 bg-gray-400 bottom-0 w-full h-40'>

            {/* Logo Container Started */}
            <div className='logo h-28'>
                <a href="https://www.lnmiit.ac.in/">
                    <img src="src/resources/images/lnmiit_logo1_reduced.png" alt="LNMIIT Logo" className='w-[12rem] h-[5rem] p-1'></img>    
                </a>
            </div>
            {/* Logo Container Closed */}

            {/* Social Handles Started */}
            <div className='socialHandles h-28'>
                <div><p className='text-white text-center'>FOLLOW US</p></div>
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
            </div>
            {/* Social Handles Closed */}

            {/* Copyright Section Started */}
            <div className='copyright text-white h-28 w-48 text-xs'>
                <p>Copyright © 2018-2023 Department of Physics, LNMIIT. All Rights Reserved.</p>
                <br/>
                <p>Handcrafted with ❤️  by-<br/>
                    <a href='' className='hover:cursor-pointer hover:duration-150 hover:font-bold'>-Aditya Chaudhary (Y22) </a><br/>
                    <a href='' className='hover:cursor-pointer hover:duration-150 hover:font-bold'>-Tushar Sukhwal (Y22) </a><br/>
                    <a href='' className='hover:cursor-pointer hover:duration-150 hover:font-bold'>-Dhruv Chandak (Y22)</a><br/>
                </p>
            </div>
            {/* Copyright Section CLosed */}

        </div>
    )
}

export default Footer