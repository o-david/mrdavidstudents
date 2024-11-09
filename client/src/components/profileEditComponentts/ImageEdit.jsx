import React, { useState } from "react";
import PopUp from "../PopUp";
import { useAuthStore } from "../../store/authStore";
import { API_URL } from "../../constants/urlConstants";
import api from "../../utils/api";
import Loader from "../Loader";

const ImageEdit = ({ setShowEditImg }) => {
  const { user, checkAuth } = useAuthStore();
  const [newImage, setNewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const saveImage = async () => {
    setLoading(true);
    try {
      await api.put(`${API_URL}/user/update-user`, {
        profilePicture: newImage,
      });
      setNewImage("");
      checkAuth();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const delImage = async () => {
    setLoading(true);
    try {
      await api.put(`${API_URL}/user/update-user`, { profilePicture: "clear" });
      setNewImage("");
      checkAuth();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const handleImageUpload = async (file) => {
    setLoading(true);
    console.log("Uploading");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "profilePic"); // Replace with your Cloudinary upload preset
    data.append("cloud_name", "dfdjpafgs"); // Replace with your Cloudinary upload preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dfdjpafgs/image/upload`,
        {
          method: "POST",
          body: data,
        }
      ); // Replace with your Cloudinary cloud name
      const res = await response.json();
      console.log(res); // Log the URL of the uploaded image
      return res.secure_url; // Return the URL of the uploaded image
    } catch (error) {
      console.error("Image upload failed:", error);
      return null; // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = async (e) => {
    console.log("i got hrere");

    const { name, type, files } = e.target;
    if (type === "file" && files.length > 0) {
      const imageUrl = await handleImageUpload(files[0]);
      setNewImage(imageUrl);
    }
  };

  return (
    <PopUp>
      {loading && <Loader />}
      <div className="sm:w-[45%] w-full flex text-sec3 flex-col items-center gap-10 bg-white py-8 rounded-lg shadow-md relative">
        <h3 className="text-[2rem]">Profile Image</h3>
        <div className="flex flex-col gap-6">
          <div className="size-40 rounded-full border-sec3  border-4 mx-auto overflow-hidden flex items-center justify-center">
            <img
              src={
                newImage
                  ? newImage
                  : user?.profilePicture
                  ? user.profilePicture
                  : "https://via.placeholder.com/150"
              }
              alt=""
            />
          </div>
          <div className="flex justify-center gap-4">
            <label
              htmlFor="uploadImg"
              className="border border-sec3 rounded-lg p-2 transition-all hover:bg-sec3 hover:text-white cursor-pointer"
              name="uploadImg"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="uploadImg"
              onChange={handleInputChange}
              className="hidden"
            />
            <button
              className="border border-red-300 bg-red-300 rounded-lg p-2 transition-all hover:bg-red-500 hover:text-white"
              onClick={delImage}
            >
              Delete Image
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowEditImg(false)}
          className="absolute top-0 right-0 p-4 text-sec3 font-bold text-right text-4xl"
        >
          x
        </button>
      </div>
      {newImage && (
        <div className="absolute">
          <button
            onClick={() => setNewImage("")}
            className="border border-sec3 rounded-lg py-2 transition-all hover:bg-sec3 hover:text-white w-full"
          >
            Cancel
          </button>
          <button
            onClick={saveImage}
            className="border border-sec3 rounded-lg py-2 transition-all hover:bg-sec3 hover:text-white w-full"
          >
            Save
          </button>
        </div>
      )}
    </PopUp>
  );
};

export default ImageEdit;
