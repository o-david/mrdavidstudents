// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      
      <main>
        <Outlet />
      </main>
      <p>I am layout</p>
    </div>
  );
};

export default Layout;