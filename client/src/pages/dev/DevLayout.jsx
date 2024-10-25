import { Link, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { logo } from "../../assets";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Profile from "./Profile";
import { GEN_URL } from "../../constants/urlConstants";

const Header = () => {
  const { user } = useAuthStore();
  const logout =() =>{
    localStorage.removeItem("token");
    window.location.href = `${GEN_URL}/login?logout=true`; // Redirect if no token is found
  }
  return (
      <header className="flex justify-between items-center px-4 bg-sec text-sec3 h-[10vh]">
        <Link to="/" className="h-4/5">
          <img src={logo} alt="Logo" className="h-full" />
        </Link>
        <div className="relative flex gap-2 items-center cursor-pointer group">
        {user?.profilePicure ? (
              <img 
                src={user.profilePcture} 
                alt={"fullName"} 
                className="w-10 h-10 rounded-full mr-2"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-sec3 flex items-center justify-center mr-2">
                <span className="text-white font-bold">
                  {`${user.firstName[0]}${user.lastName[0]}`.toUpperCase()}
                </span>
              </div>
            )}
          <span>{user && user.firstName} {user && user.lastName}</span>
          <div className="hidden absolute left-0 top-full group-hover:flex flex-col w-full pt-3 overflow-hidden bg-sec rounded-b-lg cursor-pointer">
          <Link to="/profile" className="p-4 cursor-pointer hover:bg-sec3 hover:text-white">Profile</Link>
          <p onClick={logout} className="p-4 cursor-pointer hover:bg-sec3 hover:text-white">Logout</p>
          </div>
        </div>
      </header>
  );
}

const Sidebar = ({ currentPage }) => (
  <nav className="bg-gradient-to-b from-sec3 to-sec transition-all duration-500  w-64 h-full shadow-lg rounded-r-lg hover:md:w-1/4 md:w-40">
    <ul className="flex flex-col p-4">
      <Link to="/" className={`mb-4  transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === '' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:shadow-lg hover:text-white text-gray-800 cursor-pointer`}>
        <li className="font-semibold  hover:text-white">Dashboard</li>
      </Link>
      <Link to="/resources" className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'resources' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:text-white text-gray-800 hover:shadow-lg cursor-pointer`}>
        <li  className="font-semibold ">Resources</li>
      </Link>
      <Link to="/utilities" className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'utilities' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:shadow-lg cursor-pointer`}>
        <li className="font-semibold text-gray-800 hover:text-blue-600">Utilities</li>
      </Link>
      {/* <Link to="/surveys" className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'surveys' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:shadow-lg cursor-pointer`}>
        <li className="font-semibold text-gray-800 hover:text-blue-600">Surveys</li>
      </Link> */}
      <Link to="/projects" className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'projects' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:text-white text-gray-800 hover:shadow-lg cursor-pointer`}>
        <li className="font-semibold">Projects</li>
      </Link>
      <li className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'gigs' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:shadow-lg cursor-pointer`}>
        <Link to="/gigs" className="font-semibold text-gray-800 hover:text-blue-600">Gigs</Link>
      </li>
      <li className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'chat' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:shadow-lg cursor-pointer`}>
        <Link to="/chat" className="font-semibold text-gray-800 hover:text-blue-600">Chat</Link>
      </li>
    </ul>
  </nav>
);

const DevLayout = () => {
  const [currentPage, setCurrentPage] = useState("");
  const handletopage = (page) => {
    setCurrentPage(page);
  }
  
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 h-[90vh] flex-col md:flex-row">
        <Sidebar currentPage={ currentPage} />
        <main className="flex-1 p-4 bg-[#faf9f6]">
          <Routes>
            <Route path="/" element={<Dashboard childPage={handletopage}/>}/>
            <Route path="/projects" element={<Projects childPage={handletopage}/>}/>
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DevLayout;
