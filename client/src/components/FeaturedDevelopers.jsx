import React from 'react'
import DevelopersCard from './DevelopersCard'
import developers from '../data/developersData'
const FeaturedDevelopers = () => {
  return (
    <div className='py-40'>

    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Featured Developers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {developers.map((developer, index) => (
          <DevelopersCard key={index} developer={developer} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default FeaturedDevelopers