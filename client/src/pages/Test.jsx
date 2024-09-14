import React from 'react'
import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto py-12 sm:py-24 lg:py-32">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Tell me and I forget, teach me and I may remember, involve me and I learn.
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 sm:leading-[1.2]">
            Thriving Community of Passionate Techies
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
            Your go-to hub for connecting with verified, skilled developers passionate about impact, collaboration and growth.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Link to={'/register'} className="w-full sm:w-auto border border-sec3 rounded-lg px-4 py-2 text-sm sm:text-base transition-all hover:bg-sec3 hover:text-white">
              Join Community
            </Link>
            <Link to={'/'} className="text-sm sm:text-base font-semibold leading-6 text-sec3">
              Hire a Developer <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Test