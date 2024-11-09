import React, { useState } from 'react'

const Input = ({placeholder, value, onChange, type, name, required=true}) => {
    return (
        <div>
      {
          type === 'textarea' ?
        //   <div className='relative group flex flex-col'>
        //     <label htmlFor={placeholder} className='absolute top-0 left-0 peer-focus:-top-5 peer-valid:-top-6 peer-focus:text-[0.75rem] peer-valid:text-[0.75rem] peer-valid:text-sec3 bg-transparent'>{placeholder} </label>
        //     <div className='scale-x-0 transition-transform transform focus peer-focus:scale-x-100 h-[0.125rem] w-full bg-sec duration-500 absolute bottom-0 left-0'></div>
        //   </div>
        <div className='relative group flex flex-col'>
        <textarea id={placeholder} rows="1" name={name} required className='border-b-2 border-sec3 peer bg-transparent focus:outline-none resize-none' value={value} onChange={onChange} />
            <label htmlFor={placeholder} className='absolute top-0 left-0 peer-focus:-top-5 peer-valid:-top-6 peer-focus:text-[0.75rem] peer-valid:text-[0.75rem] peer-valid:text-sec3 bg-transparent'>{placeholder} </label>
            <div className='scale-x-0 transition-transform transform focus peer-focus:scale-x-100 h-[0.125rem] w-full bg-sec duration-500 absolute bottom-0 left-0'></div>
          </div>  
        :
          <div className='relative group flex flex-col'>
          <input type={type} id={placeholder} name={name} required={required} className=' outline-0 focus:outline-none border-b-2 border-sec3 peer bg-pry focus:bg-transparent' value={value}
          onChange={onChange} />
            <label htmlFor={placeholder} className='absolute top-0 left-0 peer-focus:-top-5 peer-valid:-top-6 peer-focus:text-[0.75rem] peer-valid:text-[0.75rem] peer-valid:text-sec3 bg-transparent'>{placeholder} </label>
            <div className='scale-x-0 transition-transform transform focus peer-focus:scale-x-100 h-[0.125rem] w-full bg-sec duration-500 absolute bottom-0 left-0'></div>
          </div>
        }
        </div>
    )
}

export default Input