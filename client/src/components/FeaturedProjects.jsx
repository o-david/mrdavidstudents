import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projectData'

const FeaturedProjects = () => {
  return (
    <div className='py-40 rounded-lg bg-[#faf9f6]'>

    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default FeaturedProjects