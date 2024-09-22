import { useEffect } from "react";
import {
  useNavigation,
  useLoaderData,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Loader from "../../components/Loader";

const DevLayout = () => {
  const { isLoading, user } = useAuthStore();
  const navigation = useNavigation();
  // const data = useLoaderData();
  // const url = data.url;
  // const Navigate = useNavigate();

  

  if (navigation.state === "loading") {
    return <Loader />;
  }
  else{

    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
      <p>Hello {user && user.firstName} {user && user.lastName} </p>
      <Outlet />
    </div>
  );
}
};

export default DevLayout;
