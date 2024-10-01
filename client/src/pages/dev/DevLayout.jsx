import {
  useNavigation,
  Outlet,
} from "react-router-dom";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { logo } from "../../assets";

const Header = () => {
  const { isLoading, user } = useAuthStore();

  return (
      <header className="flex justify-between items-center px-4 bg-sec text-sec3 h-[10vh]">
        <Link to="/" className="h-4/5">
          <img src={logo} alt="Logo" className="h-full" />
        </Link>
        <div>
          <span>Welcome, {user && user.firstName} {user && user.lastName}</span>
          <Link to="/logout" className="ml-4">Logout</Link>
        </div>
      </header>
  );
}

const Sidebar = ({ currentPage }) => (
  <nav className="bg-gradient-to-b from-sec3 to-sec w-64 h-full shadow-lg rounded-r-lg md:w-1/4">
    <ul className="flex flex-col p-4">
      <li className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'profile' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:shadow-lg cursor-pointer`}>
        <Link to="/profile" className="font-semibold text-gray-800 hover:text-blue-600">Profile</Link>
      </li>
      <Link to="/resources" className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'resources' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:shadow-lg cursor-pointer`}>
        <li  className="font-semibold text-gray-800 hover:text-blue-600">Resources</li>
      </Link>
      <li className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'utilities' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:shadow-lg cursor-pointer`}>
        <Link to="/utilities" className="font-semibold text-gray-800 hover:text-blue-600">Utilities</Link>
      </li>
      <li className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'surveys' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:shadow-lg cursor-pointer`}>
        <Link to="/surveys" className="font-semibold text-gray-800 hover:text-blue-600">Surveys</Link>
      </li>
      <li className={`mb-4 transition-transform transform hover:scale-105 p-3 rounded-lg shadow ${currentPage === 'projects' ? 'bg-pry' : 'bg-[#faf9f6]'} hover:bg-pry hover:shadow-lg cursor-pointer`}>
        <Link to="/projects" className="font-semibold text-gray-800 hover:text-blue-600">Projects</Link>
      </li>
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
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  } else {
    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex flex-1 h-[90vh] flex-col md:flex-row">
          <Sidebar currentPage={"profile"} />
          <main className="flex-1 p-4 bg-[#faf9f6]">
            <Outlet />
          </main>
        </div>
      </div>
    );
  }
};

export default DevLayout;
