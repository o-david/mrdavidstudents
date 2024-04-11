// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";

export const StudentLayout = () => {
  return (
    <div>
      
      <main>
        <Outlet />
      </main>
      <p>I am layout</p>
    </div>
  );
};
export const Layout = () => {
  return (
    <div>
        <Outlet />
    </div>
  );
};

export default Layout;