import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";
import ProjectCard from "../../components/ProjectCard";
import { useProjectStore } from "../../store/projectStore";
import { github, linkedin, x } from "../../assets";
import { useNavigate } from "react-router-dom";
import AddProject from "../../components/AddProject";
import ProfileUpdateComponent from "../../components/ProfileUpdateComponent";
import ImageEdit from "../../components/profileEditComponentts/ImageEdit";
import ProfileEdit from "../../components/profileEditComponentts/ProfileEdit";

const Profile = ({ dev }) => {
  const { user } = useAuthStore();
  const [showEditImg, setShowEditImg] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const navigate = useNavigate();
  const { projects, getProjects } = useProjectStore();
  const formatDate = (dateString, month = false) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    if (!month) {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  useEffect(() => {
    getProjects({ id: user?._id });
  }, []);
  return (
    <div className="flex flex-col justify-between h-full gap-6 px-6 pb-6">
      {showEditImg && <ImageEdit setShowEditImg={setShowEditImg} />}
      {showEditProfile && (
        <ProfileEdit setShowEditProfile={setShowEditProfile} />
      )}
      <AddProject />
      <ProfileUpdateComponent />
      {dev && (
        <div
          className="rounded-full bg-sec3 absolute top-8 size-10 flex items-center justify-center font-black cursor-pointer text-white"
          onClick={() => navigate("/")}
        >{`<`}</div>
      )}
      <div className="mt-10"></div>
      {dev && (
        <div className="">
          <h1 className="text-3xl text-center font-bold border-b-2 pb-4">
            Profile
          </h1>{" "}
        </div>
      )}
      <div className="h-full overflow-y-scroll no-scrollbar flex flex-col gap-6">
        <div className=" mx-auto rounded-lg  grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Profile Info */}
          <div className="col-span-1 ">
            <div className="bg-white p-4 rounded-lg shadow relative">
              <div
                title="Edit"
                onClick={() => setShowEditProfile(true)}
                className="absolute bottom-4 right-4 justify-between flex cursor-pointer"
              >
                <p
                  to={"/register"}
                  className="hover:border border-sec3 rounded-full p-2"
                >
                  <svg
                    className="w-4 fill-[#67595E] hover:scale-125"
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
                </p>
              </div>
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden flex items-center justify-center">
                <img
                  onClick={() => setShowEditImg(true)}
                  className="w-full"
                  src={
                    user?.profilePicture
                      ? user.profilePicture
                      : "https://via.placeholder.com/150"
                  }
                  alt="Profile"
                />
              </div>
              <h2 className="text-center text-xl font-semibold mt-2">
                {user?.firstName} {user?.lastName}
              </h2>
              <p className="text-center text-gray-600">
                {user && user.currentRole
                  ? user.currentRole
                  : "Full Stack Developer"}
              </p>
              <p className="text-center text-gray-600">
                {user && user.address
                  ? `[${user.address?.city}${
                      user.address?.country ? `, ${user.address.country}` : ""
                    }]`
                  : "[City, Country]"}
              </p>
              <p className="text-center text-gray-600 mt-4">{user?.email}</p>
              <p className="text-center text-gray-600 mt-2">
                {user && user.phoneNumber ? user.phoneNumber : "+123 456 789"}
              </p>

              {/* Links to Profiles */}
              <div className="flex justify-center mt-4 gap-2 items-center">
                {
                  user && user?.socials?.github &&
                  <a
                    href={user.socials.github}
                    target="_blank"
                    className="w-6 hover:scale-110 cursor-pointer"
                  >
                    <img src={github} alt="Github Logo" className="w-full" />
                  </a>
                }
                {
                  user && user?.socials?.linkedIn &&
                  <a
                    href={user.socials.linkedIn}
                    target="_blank"
                    className="w-6 hover:scale-110 cursor-pointer"
                  >
                    <img src={linkedin} alt="Github Logo" className="w-full" />
                  </a>
                }
                {
                  user && user?.socials?.twitter &&
                  <a
                    href={user.socials.twitter}
                    target="_blank"
                    className="w-6 hover:scale-110 cursor-pointer"
                  >
                    <img src={x} alt="Github Logo" className="w-full" />
                  </a>
                }
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white p-4 mt-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {user &&
                  user.skills &&
                  user.skills.map((skill, index) => {
                    return (
                      <span key={index} className="bg-gray-200 p-2 rounded-lg">
                        {skill}
                      </span>
                    );
                  })}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-white p-4 mt-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Certifications</h3>
              <div className="grid grid-cols-1 gap-2">
                {user && user.certifications.length > 0 ? (
                  user.certifications.map((cert, index) => {
                    return (
                      <span key={index} className="bg-gray-200 p-2 rounded-lg">
                        {cert}
                      </span>
                    );
                  })
                ) : (
                  <span className="bg-gray-200 p-2 rounded-lg">
                    upload your certifications
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - General Information */}
          <div className="col-span-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              {user && user.bio ? (
                <p>
                  Full stack developer with 5+ years of experience building
                  scalable web applications and services. Strong proficiency in
                  JavaScript frameworks and cloud-based technologies. Passionate
                  about solving complex problems and creating intuitive user
                  interfaces.
                </p>
              ) : (
                <p>Add your bio</p>
              )}

              {/* Experience Section */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold">Experience</h4>
                {user?.experience && user.experience.length > 0 ? (
                  user.experience.map((exp, index) => (
                    <div key={index} className="experience-item">
                      <h5 className="font-semibold">
                        {exp.position} - {exp.company}
                      </h5>
                      <p className="text-sm text-gray-600">{`${formatDate(
                        exp.startDate,
                        true
                      )} - ${formatDate(exp.endDate, true) || "Present"}`}</p>
                      {exp?.achievements?.map((point, index) => (
                        <p key={index} className="mt-2 text-gray-700">
                          {point}
                        </p>
                      ))}
                    </div>
                  ))
                ) : (
                  <div>
                    <p>No experience added yet.</p>
                  </div>
                )}
              </div>
              {/* Education Section */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold">Education</h4>
                {user?.education && user.education.length > 0 ? (
                  user.education.map((edu, index) => (
                    <p key={index}>
                      {edu.degree} in {edu.fieldOfStudy}, {edu.institution} (
                      {`${formatDate(edu.startDate)} - ${
                        formatDate(edu.endDate) || "Present"
                      }`}
                      )
                    </p>
                  ))
                ) : (
                  <div>
                    <p>No Education record added yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold border-b-2 pb-2">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects?.length > 0 ? (
            projects
              .slice(0, 8)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
          ) : (
            <p>No projects added yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
