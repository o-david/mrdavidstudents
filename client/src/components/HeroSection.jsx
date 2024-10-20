import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className=" px-6 min-h- md:h-[80vh] md:max-h-[1000px] flex items-center  lg:px-8  overflow-hidden">
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className=" rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Tell me and I forget, teach me and I may remember, involve me and I learn.{' '}
              {/* <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-[4.5rem]">
            Thriving Community of Passionate Techies
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Your go-to hub for connecting with verified, skilled developers passionate about impact, collaboration and growth.
            {/*  */}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <Link
                to={'/register'}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Community
              </Link> */}
            <Link to={'/register'} className="border border-sec3 rounded-lg p-2 transition-all hover:bg-sec3 hover:text-white">
            Join Community
            </Link>
              <Link to={'/'} className="text-sm font-semibold leading-6 text-sec3 flex gap-0.5 transition-all hover:gap-2 relative group duration-700">
                Hire a Developer <span aria-hidden="true" className='absolute left-full group-hover:left-[103%] '>→</span>
              </Link>
            </div>
          </div>
        </div>
        
       
      </section>
  )
}

export default HeroSection