import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({project}) => {
  return (
    <div className="relative group bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
    <div className="absolute top-4 left-4 right-4 justify-between hidden group-hover:flex">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className=" cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-pry opacity-75 px-4 py-2 text-xs font-medium text-white hover:opacity-100 transition duration-300"
          >
            View Live
          </a>
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className=" cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-sec px-4 py-2 text-xs font-medium text-sec3 opacity-70 hover:opacity-100 transition duration-300"
          >
            View Repo
          </a>
        </div>
    <img src={project.screenshot} alt={project.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <Link to={`/developers/${project.studentName}`} className="text-gray-600 mb-1">{project.studentName}</Link>
      <p className="text-gray-500 mb-2">{project.type}</p>
      <div className="flex flex-wrap gap-2 h-[2lh] overflow-y-hidden items-start">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ProjectCard