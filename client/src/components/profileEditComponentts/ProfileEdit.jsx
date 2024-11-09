import { useState } from "react";
import Loader from "../Loader";
import PopUp from "../PopUp";
import Input from "../Input";
import { useAuthStore } from "../../store/authStore";
import api from "../../utils/api";
import { API_URL } from "../../constants/urlConstants";

const ProfileEdit = ({ setShowEditProfile }) => {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    currentRole: user.currentRole || "",
    city: user.address.city || "",
    state: user.address.state || "",
    country: user.address.country || "",
    phoneNumber: user.phoneNumber || "",
    username: user.username || "",
    linkedIn: user.socials?.linkedIn || "",
    github: user?.socials?.github || "",
    twitter: user.socials?.twitter || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        console.log(formData);
        
      await api.put(`${API_URL}/user/update-user`, formData);
    //   checkAuth();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = async (e) => {
    
    const { name, value, type, files } = e.target;
    if (type === "file" && files.length > 0) {
      const imageUrl = await handleImageUpload(files[0]);
      setFormData({ ...formData, [name]: imageUrl });
    } else if (name === "technologies") {
      const tech = value.split(",");
      setFormData({ ...formData, [name]: tech });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <PopUp>
      {loading && <Loader />}

      <div className="sm:min-w-[45%] px-6 flex text-sec3 flex-col items-center gap-10 bg-pry py-8 rounded-lg shadow-md relative">
        <h3 className="text-[2rem]">Add New Project</h3>

        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
          <div className="mb-8 flex justify-between gap-2">
            <div className="w-full">
              <Input
                placeholder="First Name"
                type={"text"}
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="Last Name"
                type={"text"}
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-8">
            <Input
              placeholder="Current Role"
              type={"textarea"}
              name="currentRole"
              value={formData.currentRole}
              rows="2"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-8 flex justify-between gap-2">
            <div className="w-full">
              <Input
                placeholder="City"
                type={"text"}
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="State"
                type={"text"}
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="Country"
                type={"text"}
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mb-8">
            <Input
              placeholder="Phone Number"
              type={"textarea"}
              name="phoneNumber"
              value={formData.phoneNumber}
              rows="2"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-8">
            <Input
              placeholder="Username(This is used for dev URL)"
              type={"text"}
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-8 flex justify-between gap-2">
            <div className="w-full">
              <Input
                placeholder="LinkedIn Url"
                type={"text"}
                name="linkedIn"
                required={false}
                value={formData.linkedIn}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="Github"
                type={"text"}
                required={false}
                name="github"
                value={formData.github}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="Twitter"
                required={false}
                type={"text"}
                name="twitter"
                value={formData.twitter}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button className="border border-sec3 rounded-lg py-2 transition-all hover:bg-sec3 hover:text-white w-full">
            Save
          </button>
        </form>
        <button
          onClick={() => setShowEditProfile(false)}
          className="absolute top-0 right-0 p-4 text-sec3 font-bold text-right text-4xl"
        >
          x
        </button>
      </div>
    </PopUp>
  );
};

export default ProfileEdit;
