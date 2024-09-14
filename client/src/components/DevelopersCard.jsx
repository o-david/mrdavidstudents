import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa'

const DevelopersCard = ({developer}) => {
  const iconMap = {
    GitHub: FaGithub,
    LinkedIn: FaLinkedin,
    Instagram: FaInstagram,
    Portfolio: FaGlobe,
  }
  return (
  //   <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
  //   <img src={developer.profilePic} alt={developer.name} className="w-full h-48 object-cover" />
  //   <div className="p-4">
  //     <h3 className="text-xl font-semibold mb-1">{developer.name}</h3>
  //     <p className="text-gray-600 mb-2">{developer.title}</p>
  //     <p className="text-gray-500 mb-3 text-sm">{developer.bio}</p>
  //     <div className="flex flex-wrap gap-2 mb-3">
  //       {developer.skills.map((skill, index) => (
  //         <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
  //           {skill}
  //         </span>
  //       ))}
  //     </div>
  //     <div className="flex space-x-2">
  //       {developer.links.map((link, index) => (
  //         <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" 
  //            className="text-sm text-blue-600 hover:text-blue-800">
  //           {link.name}
  //         </a>
  //       ))}
  //     </div>
  //   </div>
  // </div>
  <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
    <img src={developer.profilePic} alt={developer.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-1">{developer.name}</h3>
      <p className="text-gray-600 mb-2">{developer.title}</p>
      <p className="text-gray-500 mb-3 text-sm line-clamp-3">{developer.bio}</p>
      <div className="flex flex-wrap gap-2 mb-3 h-12 overflow-hidden">
        {developer.skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex space-x-3">
        {developer.links.map((link, index) => {
          const Icon = iconMap[link.name] || FaGlobe
          return (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Icon size={20} />
            </a>
          )
        })}
      </div>
    </div>
  </div>
  )
}

export default DevelopersCard