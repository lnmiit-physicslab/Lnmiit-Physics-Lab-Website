import React from 'react'
import NavBar from './NavBar'

const HeaderC = () => {
    return (
    <div>
        <div className='w-[100vw] h-[7vh]'><NavBar/></div>
        <div><img src="src/components/Titlelogo.png" alt="img" className="w-68 h-40 m-auto select-none"></img></div>
        <div className='text-center select-none'>
            <p className='text-4xl'>UG Physics Laboratory</p>
            <p className='text-2xl'>LNMIIT , Jaipur</p>
        </div>
    </div>
    )
}

export default HeaderC