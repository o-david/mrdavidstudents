import React, { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";
import Input from "../../components/Input";
import projectsData from "../../data/projectData";
import ProjectCard from "../../components/ProjectCard";
import api from "../../utils/api";
import { API_URL } from "../../constants/urlConstants";
import axios from "axios";

const Projects = ({ childPage }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => setShowPopUp(!showPopUp);
  useEffect(() => {
    childPage("projects");
  }, []);
  const [formData, setFormData] = useState({
    name: "App4",
    desc: "this is a random desc",
    imgUrl: "www.app4.com",
    type: "mobile",
    technologies: ["typescript", "Node"],
    liveUrl: "www.app4.com",
    githubUrl: "github.com"
  });
  const handleImageUpload = async (file) => {
    console.log("Uploading");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "projectImg"); // Replace with your Cloudinary upload preset
    data.append("cloud_name", "dfdjpafgs"); // Replace with your Cloudinary upload preset
  
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/dfdjpafgs/image/upload`, 
        {
          method:"POST",
          body:data
        }); // Replace with your Cloudinary cloud name
        const res = await response.json();
        console.log(res); // Log the URL of the uploaded image
      return res.secure_url; // Return the URL of the uploaded image
    } catch (error) {
      console.error("Image upload failed:", error);
      return null; // Handle error appropriately
    }
  };
  const handleInputChange = async (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files.length > 0) {
      const imageUrl = await handleImageUpload(files[0]);
      setFormData({ ...formData, [name]: imageUrl });
    }else if(name==="technologies"){
      const tech = value.split(',')
      console.log(tech);
      setFormData({ ...formData, [name]: tech });
    } 
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
		try {
			await api.post(`${API_URL}/project`,formData);
		} catch (error) {
			console.log(error);
		}
  };

  return (
    <div className="flex flex-col justify-between h-full gap-6">
      <h1 className="text-3xl text-sec3 border-b-2 pb-4">Projects</h1>
      <div
        onClick={togglePopUp}
        className="fixed bg-pry rounded-full text-sec3 font-black text-7xl w-20 aspect-square flex items-center justify-center cursor-pointer opacity-40 hover:opacity-100 bottom-4 right-4 z-10"
      >
        <span className="flex items-center justify-center">+</span>
      </div>
<div className=" h-full overflow-y-scroll no-scrollbar">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
        </div>
      {showPopUp && (
        <PopUp>
          <div className="sm:w-[45%] w-full flex text-sec3 flex-col items-center gap-10 bg-pry py-8 rounded-lg shadow-md relative">
            <h3 className="text-[2rem]">Add New Project</h3>

            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
              <div className="mb-8">
                <Input
                  placeholder="Project Name"
                  type={"text"}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <Input
                  placeholder="Description"
                  type={"textarea"}
                  name="desc"
                  value={formData.desc}
                  rows="2"
                  onChange={handleInputChange}
                  />
              </div>

              <div className="mb-8">
                <div class="flex w-full items-center justify-between">
                <label htmlFor="" className=" whitespace-nowrap">
                    Picture
                  </label>
                  <input
                    id="picture"
                    type="file"
                    class="flex h-10 w-[80%] rounded-md border border-sec3 border-input  px-3 py-2 text-sm text-sec3 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
                    onChange={handleInputChange}
                    name="imgUrl"
                  />
                </div>
              </div>
              <div className="mb-8 bg-pry flex items-center justify-between">
                <label htmlFor="projectType" className="whitespace-nowrap">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-[70%] px-3 py-2 text-gray-700 border border-sec3 rounded-lg focus:outline-none bg-pry"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="web">Web</option>
                  <option value="mobile">Mobile</option>
                  <option value="desktop">Desktop</option>
                </select>
              </div>
              <div className="mb-8">
                <Input
                  placeholder="Technologies (comma-separated)"
                  type={"text"}
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-8">
                <Input
                  placeholder="Live URL"
                  type={"url"}
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-8">
                <Input
                  placeholder="GitHub URL"
                  type={"url"}
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleInputChange}
                />
              </div>

              <button className="border border-sec3 rounded-lg py-2 transition-all hover:bg-sec3 hover:text-white w-full">
                Save
              </button>
            </form>
            <button
              onClick={togglePopUp}
              className="absolute top-0 right-0 p-4 text-sec3 font-bold text-right text-4xl"
            >
              x
            </button>
          </div>
        </PopUp>
      )}
    </div>
  );
};

export default Projects;
