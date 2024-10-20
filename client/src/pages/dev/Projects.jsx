import React, { useEffect } from "react";
import projectsData from "../../data/projectData";
import ProjectCard from "../../components/ProjectCard";
import AddProject from "../../components/AddProject";

const Projects = ({ childPage }) => {

  useEffect(() => {
    childPage("projects");
  }, []);
  
  return (
    <div className="flex flex-col justify-between h-full gap-6">

      <AddProject/>
      <h1 className="text-3xl text-sec3 border-b-2 pb-4">Projects</h1>
      
<div className=" h-full overflow-y-scroll no-scrollbar">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
        </div>
     
    </div>
  );
};

export default Projects;
