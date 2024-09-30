import {
  useNavigation,
  Outlet,
} from "react-router-dom";
import Loader from "../../components/Loader";

const DevLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  else{
    return (
    <div>
      <Outlet />
    </div>
  );
}
};

export default DevLayout;
