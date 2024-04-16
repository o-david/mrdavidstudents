const StudentLoader = async () => {
    console.log('Loading')
    // let name = "stuff"
  return "name"
}


export const dataLoader = async () => {
  const res = await fetch('https://api.example.com/data');
  const jsonResult = await res.json();

  return jsonResult;
};
export default StudentLoader




// const StudentGate = () => {
//     const { token } = useParams();

//     useEffect(() => {
//       // Check if token is present
//       if (token) {
//         // Store token in local storage
//         localStorage.setItem("token", token);

//         // Remove token from URL
//         const urlWithoutToken = window.location.pathname.replace(
//           `/${token}`,
//           ""
//         );
//         history.replace(urlWithoutToken);
//       }
//     }, [token, history]);
//     return (
//       // Your component JSX
//       <div>
//         <Outlet/>
//       </div>
//     );
//   };
