import React, { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";


const Profile = ({childPage}) => {
  const { user } = useAuthStore();

  useEffect(() => {
    childPage("profile");
  }, []);
  return (
    <div className="flex flex-col justify-between h-full gap-6">
      <h1 className="text-3xl  font-bold border-b-2 pb-4">Profile</h1>
      <div className="h-full overflow-y-scroll no-scrollbar">

      <div className="max-w-6xl mx-auto rounded-lg  grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Left Section - Profile Info */}
         <div className="col-span-1">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              className="w-24 h-24 rounded-full mx-auto"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <h2 className="text-center text-xl font-semibold mt-2">{user && user.firstName} {user && user.lastName}</h2>
            <p className="text-center text-gray-600">Full Stack Developer</p>
            <p className="text-center text-gray-600">[City, Country]</p>
            <p className="text-center text-gray-600 mt-4">{user?.email}</p>
            <p className="text-center text-gray-600 mt-2">+123 456 789</p>
            
            {/* Links to Profiles */}
            <div className="flex justify-center mt-4 space-x-4">
              <a href="[GitHub URL]" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="[LinkedIn URL]" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="[Portfolio URL]" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white p-4 mt-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              <span className="bg-gray-200 p-2 rounded-lg">JavaScript</span>
              <span className="bg-gray-200 p-2 rounded-lg">React.js</span>
              <span className="bg-gray-200 p-2 rounded-lg">Node.js</span>
              <span className="bg-gray-200 p-2 rounded-lg">HTML/CSS</span>
              <span className="bg-gray-200 p-2 rounded-lg">Python</span>
              <span className="bg-gray-200 p-2 rounded-lg">Git/GitHub</span>
              <span className="bg-gray-200 p-2 rounded-lg">SQL</span>
              <span className="bg-gray-200 p-2 rounded-lg">Docker</span>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white p-4 mt-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <div className="grid grid-cols-1 gap-2">
              <span className="bg-gray-200 p-2 rounded-lg">AWS Certified Developer</span>
              <span className="bg-gray-200 p-2 rounded-lg">Certified Kubernetes Administrator</span>
            </div>
          </div>
        </div>

        {/* Right Section - General Information */}
        <div className="col-span-2">
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">General Information</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut est dolor.
              Aliquam eget dui sed felis suscipit ultricies. Etiam facilisis sem quis dui dictum,
              id pharetra mauris fermentum.
            </p>

            {/* Education and Work History */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Education</h4>
              <p>Thomas Jeff High School, Stanford University</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Work History</h4>
              <p>Twitch, Google, Apple</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Languages</h4>
              <p>English, German, Italian, Spanish</p>
            </div>

            {/* Join Date and Other Info */}
            <div className="grid grid-cols-2 mt-6 gap-4">
              <div>
                <h4 className="text-lg font-semibold">Join Date</h4>
                <p>12-09-2021</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Organization</h4>
                <p>Themesberg LLC</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Role</h4>
                <p>Graphic Designer</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Birthday</h4>
                <p>15-08-1990</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p>
              Full stack developer with 5+ years of experience building scalable web applications and services. 
              Strong proficiency in JavaScript frameworks and cloud-based technologies. Passionate about solving 
              complex problems and creating intuitive user interfaces.
            </p>

            {/* Experience Section */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Experience</h4>
              <div className="mt-2">
                <h5 className="font-semibold">Senior Developer - Tech Corp</h5>
                <p className="text-sm text-gray-600">Jan 2021 - Present</p>
                <p className="mt-2 text-gray-700">
                  Led the development of the company's core product, a SaaS platform for enterprise clients, using 
                  React, Node.js, and AWS. Improved performance by 30% and streamlined deployment using Docker 
                  and CI/CD pipelines.
                </p>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold">Frontend Developer - Web Solutions</h5>
                <p className="text-sm text-gray-600">Jul 2018 - Dec 2020</p>
                <p className="mt-2 text-gray-700">
                  Designed and implemented interactive UI components for e-commerce websites using React and Redux.
                  Collaborated with designers to ensure pixel-perfect designs and seamless user experience.
                </p>
              </div>
            </div>

            {/* Projects Section */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Projects</h4>
              <div className="mt-2">
                <h5 className="font-semibold">Project Name</h5>
                <p className="text-sm text-gray-600">[GitHub Repo]</p>
                <p className="mt-2 text-gray-700">
                  A full-stack application for managing tasks, built using MERN stack. Implemented authentication 
                  using JWT and integrated third-party APIs for task management automation.
                </p>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold">Another Project</h5>
                <p className="text-sm text-gray-600">[GitHub Repo]</p>
                <p className="mt-2 text-gray-700">
                  Developed a mobile-responsive personal portfolio using React and Tailwind CSS. Showcases 
                  projects and experience, with dynamic theming and smooth navigation.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Education</h4>
              <p>BS in Computer Science, [University Name] (2015 - 2019)</p>
            </div>
          </div>

          
        </div>
    </div>
    <h2 className="text-xl font-bold border-b-2 pb-2">Projects</h2>
    </div>
    </div>

  );
};

export default Profile;
