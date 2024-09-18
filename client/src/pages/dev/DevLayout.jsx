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
  const { isLoading, checkCookie, cookieExists, error } = useAuthStore();
  const navigation = useNavigation();
  // const data = useLoaderData();
  // const url = data.url;
  // const Navigate = useNavigate();

  // const addCookie = async () => {
  //   try {
  //     await checkCookie(url);
  //     console.log("i woorked")
  //     // window.location.href ='http://dev.localhost:5173/?token='+token
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log(document.cookie);

  // addCookie()
  

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <p>successfully loaded</p>
      <Outlet />
    </div>
  );
};

export default DevLayout;
