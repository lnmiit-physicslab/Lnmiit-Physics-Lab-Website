import React from 'react'
import NavBar from './NavBar'
import AnimatedLogo from './AnimatedLogo'

const HeaderC = () => {
    return (
    <div className='relative'>
        <div className='w-[100vw] h-[7vh] absolute'><NavBar/></div>
        <AnimatedLogo className='' />
        <div className='text-center select-none'>
            <p className='text-4xl'>UG Physics Laboratory</p>
            <p className='text-2xl'>LNMIIT , Jaipur</p>
        </div>
    </div>
    )
}

export default HeaderC