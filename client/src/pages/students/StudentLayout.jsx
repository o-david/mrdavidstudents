import { useNavigation, useLoaderData, useParams, Outlet } from 'react-router-dom';

const StudentLayout = () => {
    const navigation = useNavigation();
    const data = useLoaderData();
    console.log(useParams());

    console.log(data);
    const { token } = useParams();


  if (navigation.state === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <p>successfully loaded</p>
        <Outlet />
        
    </div>
  )
}

export default StudentLayout