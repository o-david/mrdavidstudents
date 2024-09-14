import React from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=' sticky h-[15vh] top-0  w-[100%] bottom backdrop-blur-lg z-50'>
        <div className="flex py-2 mx-auto  justify-between items-center container max-w-[1440px] h-full">
          <Link to={'/hjkhjh'} className="font-semibold text-gray-800 cursor-pointer h-full flex items-center">
        <img src={logo} className='w-20 ' alt="" />
          </Link>
          <nav className="flex gap-x-4">
            <Link to={'/utilities'} className="text-sm font-semibold text-sec3">
              Utilities
            </Link>
            <a href="#" className="text-sm font-semibold text-sec3">
              Challenges
            </a>
            <a href="#" className="text-sm font-semibold text-sec3">
              Sign in
            </a>
          </nav>
        </div>
      </header>
   )
}

export default Header