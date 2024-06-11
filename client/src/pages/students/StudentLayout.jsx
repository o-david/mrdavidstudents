import { useEffect } from 'react';
import { useNavigation, useLoaderData, useParams, Outlet, Navigate, useNavigate } from 'react-router-dom';

const StudentLayout = () => {
    const navigation = useNavigation();
    const data = useLoaderData();
    const Navigate = useNavigate()
    console.log(data);
    localStorage.setItem('token', data.data.token);
    useEffect(() => {
      Navigate('/')

    }, [])

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