import { useNavigate, useParams } from "react-router-dom";
import { useProjectStore } from "../store/projectStore";
import { useEffect, useState } from "react";
import { github, linkedin } from "../assets";
import ProjectCard from "../components/ProjectCard";
import api from "../utils/api";
import Loader from "../components/Loader";
import PageNotFound from "./PageNotFound";



const DevProfile = ({dev}) => {
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const { projects, getProjects } = useProjectStore();
  const formatDate = (dateString, month=false) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    if(!month){
      return date.toLocaleDateString("en-US", {
        year: "numeric",
      })
      }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get(`/user/${username}`);
        setUser(response.data.user);
        await fetchProjects();
        setLoading(false);
      } catch (err) {
        setError(true);
        console.error("Error fetching user profile:", err);
        setLoading(false);
        // Handle error (e.g., show error message, redirect)
      }
    };

    const fetchProjects = async () => {
      try {
        await getProjects({username});
      } catch (err) {
        console.error("Error fetching projects:", err);
        // Handle error (e.g., show error message)
      }
    };
    setLoading(true);
    getProfile();
  }, [username, getProjects]);
  return (
    
    loading? <Loader/>:
    !error?

    <div className="flex flex-col justify-between h-full gap-6 px-10 pb-6">
      {dev && <div className="rounded-full bg-sec3 absolute top-8 size-10 flex items-center justify-center font-black cursor-pointer text-white" onClick={ ()=>navigate('/')}>{`<`}</div>}
      <div className="mt-10"></div>
      {dev && <div className=""><h1 className="text-3xl text-center font-bold border-b-2 pb-4">Profile</h1> </div>}
      <div className="h-full overflow-y-scroll no-scrollbar flex flex-col gap-6">
        <div className=" mx-auto rounded-lg  grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Left Section - Profile Info */}
          <div className="col-span-1 ">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden flex items-center justify-center">
                <img
                  className="w-full"
                  src={user?.profilePicture?user.profilePicture:"https://via.placeholder.com/150"}
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
                  ? `[${user.address?.city}${user.address?.country ? `, ${user.address.country}` : ''}]`
                  : "[City, Country]"}
              </p>
              <p className="text-center text-gray-600 mt-4">{user?.email}</p>
              <p className="text-center text-gray-600 mt-2">
                {user && user.phoneNumber ? user.phoneNumber : "+123 456 789"}
              </p>

              {/* Links to Profiles */}
              <div className="flex justify-center mt-4 gap-2 items-center">
                <a
                  href={user?.github?user.github:"https://github.com"}
                  target="_blank"
                  className="w-6 hover:scale-110 cursor-pointer"
                >
                  <img src={github} alt="Github Logo" className="w-full" />
                </a>
                <a
                  href={user?.linkedin?user.linkedin:"https://linkedin.com"}
                  target="_blank"
                  className="w-8 hover:scale-110 cursor-pointer"
                >
                  <img src={linkedin} alt="LinkedIn Logo" className="w-full" />
                </a>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white p-4 mt-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
              <div className="flex gap-2 flex-wrap">
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
                        exp.startDate,true
                      )} - ${formatDate(exp.endDate, true) || "Present"}`}</p>
                      {exp?.achievements?.map((point, index) => (
                        <p key={index} className="mt-2 text-gray-700">{point}</p>
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
                <p key={index}>{edu.degree} in {edu.fieldOfStudy}, {edu.institution} ({`${formatDate(
                      edu.startDate
                    )} - ${formatDate(edu.endDate) || "Present"}`})</p>
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
          {user && projects?.slice(0, 8).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>:
    <div>
      <PageNotFound message={"It's possible this page is under construction or you've encountered a faulty path. Please check the URL and try again, or go to home page."} home={true}/>
    </div>
  );
};

export default DevProfile;
