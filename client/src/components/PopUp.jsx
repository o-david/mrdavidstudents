import React, { useEffect, useState } from 'react'

const PopUp = ({children}) => {
    const [start, setStart] = useState(false)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setStart(true);
        }, 50);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
  return (
    <div className={`fixed flex items-center justify-center  bg-[rgba(0,0,0,0.7)] overflow-hidden z-50 transition-all duration-500 ${ start? "bottom-0 right-0 w-full h-full": "top-0 left-0 w-0 h-0"}`}>
        {children}
    </div>
  )
}

export default PopUp