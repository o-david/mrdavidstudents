import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore';
import { GEN_URL } from '../constants/urlConstants';

const ProjectCard = ({project}) => {
  const { user } = useAuthStore();

  return (
    <div className="relative group bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
    <div className="absolute top-4 left-4 right-4 justify-between hidden group-hover:flex">
          {project.liveUrl &&
          <a 
            href={project.liveUrl} 
            target="_blank" 
            className=" cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-pry opacity-75 px-4 py-2 text-xs font-medium text-white hover:opacity-100 transition duration-300"
          >
            View Live
          </a>
          }

          {project.githubUrl &&
          <a 
            href={project.githubUrl} 
            target="_blank" 
            className=" cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-sec px-4 py-2 text-xs font-medium text-sec3 opacity-70 hover:opacity-100 transition duration-300"
          >
            View Repo
          </a>
          }
        </div>
    {
      user?._id && project.devId && user._id === project.devId._id &&
      <div title='Edit' className="absolute bottom-8 right-4 justify-between flex">
    <Link
          to={"/register"}
          className="border border-sec3 rounded-full p-2"
          >
          <svg className='w-4 fill-[#67595E] hover:scale-125' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"></path> </g></svg>
        </Link>
    </div>}
    <img src={project.imgUrl} alt={project.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <a href={`${GEN_URL}/dev/${project?.devId?.username}`} target="_blank" className="text-gray-600 mb-1">{project?.devId?.firstName} {project?.devId?.lastName}</a>
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