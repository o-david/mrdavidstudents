import React, { useEffect } from "react";

const Profile = ({childPage}) => {
  useEffect(() => {
    childPage("profile");
  }, []);
  return (
    <div className="p-4 overflow-y-scroll">
      <h1 className="text-3xl  font-bold border-b-2 pb-4">Profile</h1>
    </div>
  );
};

export default Profile;
