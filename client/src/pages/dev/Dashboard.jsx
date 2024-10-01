import React from "react";


const Dashboard = () => (
  <div className="flex flex-col h-screen ">
    {/* <Header /> */}
    <div className="flex flex-1">
      {/* <Sidebar currentPage={"profile"} /> */}
      <main className="flex-1 p-4 bg-[#faf9f6]">

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