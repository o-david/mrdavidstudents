import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectData";
import { Link } from "react-router-dom";
import { useProjectStore } from "../store/projectStore";

const FeaturedProjects = () => {
  const { projects, getProjects } = useProjectStore();
  React.useEffect(() => {
    getProjects();
  }, []);
  console.log(projects);
  return (
    <div className="py-40 rounded-lg bg-[#faf9f6] flex flex-col">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects?.slice(0, 8).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-10">
        <Link
          to={"/allprojects"}
          className="border border-sec3 rounded-lg p-2 transition-all hover:bg-sec3 hover:text-white"
          >
          View Projects
        </Link>
          </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
