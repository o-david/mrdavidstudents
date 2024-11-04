import React, { useState } from "react";
import Tooltip from "./Tooltip";
import PopUp from "./PopUp";
import Loader from "./Loader";
import Input from "./Input";
import { useAuthStore } from "../store/authStore";

const ProfileUpdateComponent = () => {
  const { user } = useAuthStore();
  const [showPopUp, setShowPopUp] = useState(false);
  const [loading, setloading] = useState(false);
  const [option, setOption] = useState("");
  const togglePopUp = () => setShowPopUp(!showPopUp);

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
  return (
    <div>
      <div className="flex justify-center py-8">
        {/* <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-[55%] bg-[#E8B4B8] p-6 rounded-lg shadow-md">
              <h2 class="text-xl font-semibold mb-4">Personal Details</h2>
              <form>
                <div class="flex flex-col md:flex-row gap-4">
                  <div class="w-full">
                    <label
                      for="first_name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      class="mt-1 block w-full  border-b-2  border-[#67595E] border-b-2-b-2 sm:text-sm px-4 py-2 outline-none bg-inherit"
                      placeholder="John"
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="last_name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      class="mt-1 block w-full  border-b-2   border-[#67595E] shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div class="mt-5">
                  <label
                    for="location"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Country/State
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit"
                    placeholder="johndoe@example.com"
                  />
                </div>

                <div class="mt-5">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit"
                    placeholder="+1234567890"
                  />
                </div>
                <div class="mt-5">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit"
                    placeholder="+1234567890"
                  />
                </div>
                <div class="mt-5">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit"
                    placeholder="+1234567890"
                  />
                </div>
                <div class="mt-5">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit"
                    placeholder="+1234567890"
                  />
                </div>

                <div class="mt-6">
                  <button
                    type="submit"
                    class="w-full px-4 py-2 border-[1px] border-[#67595E] bg-inherit text-[#67595E] hover:text-white rounded-md hover:bg-[#67595E]"
                  >
                    Save Personal Details
                  </button>
                </div>
              </form>
            </div>

            <div class="md:w-[45%] space-y-6">
              <div class="bg-[#E8B4B8] p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">Education</h2>
                <form action="#" method="POST">
                  <div>
                    <label
                      for="degree"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Highest Degree
                    </label>
                    <input
                      type="text"
                      id="degree"
                      name="degree"
                      class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit"
                      placeholder="Bachelor's"
                    />
                  </div>

                  <div class="mt-4">
                    <label
                      for="university"
                      class="block text-sm font-medium text-gray-700"
                    >
                      University
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit"
                      placeholder="Harvard University"
                    />
                  </div>

                  <div class="mt-6">
                    <button
                      type="submit"
                      class="w-full px-4 py-2 border-[1px] border-[#67595E] bg-inherit text-[#67595E] hover:text-white rounded-md hover:bg-[#67595E]"
                    >
                      Save Education
                    </button>
                  </div>
                </form>
              </div>

              <div class="bg-[#E8B4B8] p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">Experience</h2>
                <form>
                  <div>
                    <label
                      for="job_title"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="job_title"
                      name="job_title"
                      class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit"
                      placeholder="Software Developer"
                    />
                  </div>

                  <div class="mt-4">
                    <label
                      for="company"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit"
                      placeholder="Google Inc."
                    />
                  </div>

                  <div class="mt-6">
                    <button
                      type="submit"
                      class="w-full px-4 py-2 border-[1px] border-[#67595E] bg-inherit text-[#67595E] hover:text-white rounded-md hover:bg-[#67595E]"
                    >
                      Save Experience
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div
        onClick={togglePopUp}
        className="fixed opacity-40 hover:opacity-100 bottom-20 right-8 z-10"
      >
        <Tooltip text={"Edit Profile"}>
          <svg
            className="w-6 fill-white "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
              ></path>{" "}
            </g>
          </svg>
        </Tooltip>
      </div>
      {showPopUp && (
        <PopUp>
          {loading && <Loader />}
          <div className="sm:w-[45%] w-full flex text-sec3 flex-col items-center bg-pry py-8 rounded-lg shadow-md relative">
            <h3 className="text-[2rem] mb-4">Edit Profile</h3>
            <div className="flex rounded-t-lg overflow-hidden divide-x border border-b-0 border-sec3 divide-sec3">
              <h3
                className={`p-2 text-xl font-semibold  cursor-pointer ${
                  !option
                    ? "bg-sec3 text-white"
                    : "hover:bg-sec3 hover:opacity-60 hover:text-white"
                }`}
                onClick={() => setOption("")}
              >
                Personal Details
              </h3>
              <h3
                className={`p-2 text-xl font-semibold  cursor-pointer ${
                  option == "education"
                    ? "bg-sec3 text-white"
                    : "hover:bg-sec3 hover:opacity-60 hover:text-white"
                }`}
                onClick={() => setOption("education")}
              >
                Education
              </h3>
              <h3
                className={`p-2 text-xl font-semibold  cursor-pointer ${
                  option == "experience"
                    ? "bg-sec3 text-white"
                    : "hover:bg-sec3 hover:opacity-60 hover:text-white"
                }`}
                onClick={() => setOption("experience")}
              >
                Experience
              </h3>
            </div>
            {option === "" && (
              <form className="border rounded-lg w-[95%] mx-auto p-4 py-4 overflow-hidden border-sec3">
                <div className="w-24 h-24 rounded-full mx-auto overflow-hidden flex items-center justify-center relative">
                <img
                  className="w-full"
                  src={user?.profilePicture?user.profilePicture:"https://via.placeholder.com/150"}
                  alt="Profile"
                />
                <label htmlFor="picture" className="absolute cursor-pointer">
                <svg
            className="w-6 fill-white "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
              ></path>{" "}
            </g>
              </svg>
              <input
                    id="picture"
                    type="file"
                    className=" hidden"
                    // onChange={handleInputChange}
                    name="imgUrl"
                  />
                </label>
              </div>
                <div className="mb-8 flex justify-between">
                  <div className="w-[45%]">
                  <Input
                    placeholder="First Name"
                    type={"text"}
                    name="name"
                    // value={formData.name}
                    onChange={handleInputChange}
                  />
                  </div>
                  <div className="w-[45%]">
                  <Input
                    placeholder="Last Name"
                    type={"text"}
                    name="name"
                    // value={formData.name}
                    onChange={handleInputChange}
                    />
                    </div>
                </div>
                <div className="mb-8">
                  <Input
                    placeholder="First Name"
                    type={"text"}
                    name="name"
                    // value={formData.name}
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
                    // onChange={handleInputChange}
                    name="imgUrl"
                  />
                </div>
              </div>
              <div></div>

              </form>
            )}

            {/* <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
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
            </form> */}
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

export default ProfileUpdateComponent;
