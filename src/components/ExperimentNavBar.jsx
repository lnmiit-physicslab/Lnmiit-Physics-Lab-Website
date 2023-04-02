import React from 'react'

const ExperimentNavBar = () => {
  return (
    <div className=' bg-gray-300 flex w-[370%] justify-around h-7'>
      <div className='hover:animate-pulse hover:text-indigo-500 hover:duration-150'>Theory</div>
      <div className='hover:animate-pulse hover:text-indigo-500 hover:duration-150'>Procedure</div>
      <div className='hover:animate-pulse hover:text-indigo-500 hover:duration-150'>Video</div>
      <div className='hover:animate-pulse hover:text-indigo-500 hover:duration-150'>Resources</div>
      <div className='hover:animate-pulse hover:text-indigo-500 hover:duration-150'>Viva Voice</div>
    </div>
  )
}

export default ExperimentNavBar