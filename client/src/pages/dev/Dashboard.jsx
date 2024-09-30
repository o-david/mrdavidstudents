import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

// import { logo } from "../assets"; // Adjust the path to your logo asset

const Header = () => {
    const { isLoading, user } = useAuthStore();

    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <Link to="/">
      {/* <img src={logo} alt="Logo" className="w-20" /> */}
    </Link>
    <div>
      <span>Welcome, {user && user.firstName} {user && user.lastName}</span>
      <Link to="/logout" className="ml-4">Logout</Link>
    </div>
  </header>
);
}

const Sidebar = () => (
  <nav className="bg-gray-200 w-64 h-full">
    <ul className="flex flex-col p-4">
      <li className="mb-2"><Link to="/users" className="hover:text-blue-500">User Management</Link></li>
      <li className="mb-2"><Link to="/api" className="hover:text-blue-500">API Management</Link></li>
      <li className="mb-2"><Link to="/analytics" className="hover:text-blue-500">Analytics</Link></li>
      <li className="mb-2"><Link to="/settings" className="hover:text-blue-500">Settings</Link></li>
    </ul>
  </nav>
);

const Dashboard = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Developer Dashboard</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* Quick Stats */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="text-2xl">100</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">API Calls</h2>
            <p className="text-2xl">5000</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Errors</h2>
            <p className="text-2xl">2</p>
          </div>
        </div>
        {/* Recent Activity */}
        <h2 className="mt-4 text-xl font-semibold">Recent Activity</h2>
        <ul className="mt-2">
          <li>User John logged in</li>
          <li>API call to /users successful</li>
          <li>User Jane updated profile</li>
          <li>API call to /settings failed</li>
        </ul>
      </main>
    </div>
  </div>
);

export default Dashboard;