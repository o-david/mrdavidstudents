import React from 'react'

const Tooltip = ({children, text}) => {
  return (
<div
  className="overflow-x-visible relative w-14 h-14 overflow-y-clip group text-center cursor-pointer"
>
  <div
    className="flex text-4xl justify-center items-center w-14 h-14 rounded-full bg-sec3 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white"
  >
    {children}
  </div>
  <div
    className="absolute font-bold -bottom-10 left-1/2 text-sm text-center text-sec3 whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0"
  >
    {text}
  </div>
</div>

  )
}

export default Tooltip