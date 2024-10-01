import React from 'react'

const Projects = () => {
  return (
    <div>
        <h1 className='text-3xl text-sec3 border-b-2 pb-4'>Projects</h1>
        <div popovertarget="mydiv" className='fixed bg-pry rounded-full text-sec3 font-black text-7xl w-20 aspect-square flex items-center justify-center cursor-pointer opacity-40 hover:opacity-100 bottom-4 right-4'>
            <span className='flex items-center justify-center'>+</span>
        </div>
        <div className=' overflow-y-scroll'>
            
        </div>
        <div popover id="mydiv" className=''>
            <h1>i have popped over oooh</h1>
        </div>
    </div>
  )
}

export default Projects