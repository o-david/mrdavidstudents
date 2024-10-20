import React, { useEffect, useState } from "react";
import { useProjectStore } from "../store/projectStore";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";

const AllProjects = () => {
  const { projects, getProjects } = useProjectStore();
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("technologies"); // Default filter type
  const [showSidebar, setShowSidebar] = useState(false); // State to control sidebar visibility

  useEffect(() => {
    getProjects(); // Fetch all projects on component mount
  }, [getProjects]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    setShowSidebar(value.length > 0); // Show sidebar if there's input
  };

  const handleFilterTypeChange = (type) => {
    setFilterType(type);
  };
  const lowerCaseFilter = filter.toLowerCase();

  const filteredProjects = projects?.filter((project) => {
    if (filterType === "technologies") {
      return project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerCaseFilter)
      );
    } else if (filterType === "username") {
      return (
        project.devId.username.toLowerCase().includes(lowerCaseFilter) ||
        project.devId.firstName.toLowerCase().includes(lowerCaseFilter) ||
        project.devId.lastName.toLowerCase().includes(lowerCaseFilter)
      );
    } else if (filterType === "projectName") {
      return project.name.toLowerCase().includes(lowerCaseFilter);
    }
    return false;
  });

  return (
    <div>
      <Header />
      <div className="container mx-auto px-10 py-6 flex flex-col h-[90vh] overflow-hidden">
        <h1 className="text-3xl font-bold mb-4">All Projects</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder={"Find a project"}
            value={filter}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        {showSidebar && (
          <div className="fixed bottom-[10%] left-0 w-52 bg-white shadow-lg rounded-lg p-4 z-10 opacity-20 hover:opacity-100">
            <ul>
              <li
                className={`cursor-pointer p-2 hover:bg-gray-200 ${
                  filterType === "technologies" ? "font-bold" : ""
                }`}
                onClick={() => handleFilterTypeChange("technologies")}
              >
                <span>Technologies</span>{" "}
                <span className="text-xs">
                  {projects &&
                    projects.filter((project) =>
                      project.technologies.some((tech) =>
                        tech.toLowerCase().includes(lowerCaseFilter)
                      )
                    ).length}
                </span>
              </li>
              <li
                className={`cursor-pointer p-2 hover:bg-gray-200 ${
                  filterType === "username" ? "font-bold" : ""
                }`}
                onClick={() => handleFilterTypeChange("username")}
                >
                <span>Developer Name</span>{" "}
                <span className="text-xs">
                  {projects &&
                    projects.filter(
                      (project) =>
                        project.devId.username
                          .toLowerCase()
                          .includes(lowerCaseFilter) ||
                        project.devId.firstName
                          .toLowerCase()
                          .includes(lowerCaseFilter) ||
                        project.devId.lastName
                          .toLowerCase()
                          .includes(lowerCaseFilter)
                    ).length}
                </span>
              </li>
              <li
                className={`cursor-pointer p-2 hover:bg-gray-200 ${
                  filterType === "projectName" ? "font-bold" : ""
                }`}
                onClick={() => handleFilterTypeChange("projectName")}
                >
                  <span>Project Name</span>{" "}
                  <span className="text-xs">
                    {projects &&
                      projects.filter((project) =>
                        project.name.toLowerCase().includes(lowerCaseFilter)
                      ).length}
                  </span>
              </li>
            </ul>
          </div>
        )}
        <div className="no-scrollbar overflow-scroll h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {filteredProjects?.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
