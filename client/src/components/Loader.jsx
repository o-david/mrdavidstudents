import React from "react";
import { logo } from "../assets";

const Loader = () => {
  return (
    <div className="absolute h-screen w-screen bg-sec opacity-65 flex items-center justify-center z-50">
      <div className=" animate-ping aspect-square w-32 flex justify-center items-center">
        <img src={logo} className="bg-sec animate-spin" alt="" />
      </div>
    </div>
  );
};

export default Loader;
