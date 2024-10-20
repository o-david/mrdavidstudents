import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import api from "../utils/api";
import Input from "./Input";
import Loader from "./Loader";
import { API_URL } from "../constants/urlConstants";
import Tooltip from "./Tooltip";

const AddProject = () => {
    const [showPopUp, setShowPopUp] = useState(false);
  const [loading, setloading] = useState(false);

  const togglePopUp = () => setShowPopUp(!showPopUp);
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    imgUrl: "",
    type: "",
    technologies: "",
    liveUrl: "",
    githubUrl: ""
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
      setloading(true);
			await api.post(`${API_URL}/project`,formData);
      setShowPopUp(false);
      setloading(false);
      // After successful submission, reset the form
      setFormData({
        name: "",
        desc: "",
        imgUrl: "",
        type: "",
        technologies: "",
        liveUrl: "",
        githubUrl: ""
      });
		} catch (error) {
			console.log(error);
            setloading(false);
		}
  };
  return (
    <div>
        <div
        onClick={togglePopUp}
        className="fixed opacity-40 hover:opacity-100 bottom-4 right-8 z-10"
      >
        <Tooltip text={"Add Project"}>+</Tooltip>
      </div>
      {showPopUp && (
        <PopUp>
                {loading && <Loader/>}

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
                <div className="flex w-full items-center justify-between">
                <label htmlFor="" className=" whitespace-nowrap">
                    Picture
                  </label>
                  <input
                    id="picture"
                    type="file"
                    className="flex h-10 w-[80%] rounded-md border border-sec3 border-input  px-3 py-2 text-sm text-sec3 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
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
                  type={"text"}
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-8">
                <Input
                  placeholder="GitHub URL"
                  type={"text"}
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
  )
}

export default AddProject