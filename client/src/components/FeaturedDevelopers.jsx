import React from 'react'
import DevelopersCard from './DevelopersCard'
import developers from '../data/developersData'
import { Link } from 'react-router-dom'
const FeaturedDevelopers = () => {
  return (
    <div className='py-40 flex flex-col'>

    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Featured Developers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {developers.map((developer, index) => (
          <DevelopersCard key={index} developer={developer} />
        ))}
      </div>
      <div className="text-center mt-10 flex justify-center">
      <Link to={'/'} className="text-sm font-semibold leading-6 text-sec3 flex gap-0.5 transition-all hover:gap-2">
                Hire a Developer <span aria-hidden="true">→</span>
              </Link>
      </div>
    </div>
    </div>
  )
}

export default FeaturedDevelopers