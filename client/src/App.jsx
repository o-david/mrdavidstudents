import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { getApp } from './utils/helpers'

function App() {
  const CurrentApp =getApp()
  return (
   <div>
      <CurrentApp/>

   </div>
  )
}

export default App

// fetch("http://localhost:4000/login",{
//   method: 'POST',
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     email: email,
//     password: password
//   })
// })
// .then(res => res.json())
// .then(res=> console.log(res))
// .catch(err => console.log(err))
// }


  // useEffect(() =>{
  //   fetch("http://localhost:4000/countries")
  //   .then(res =>res.json())
  //   .then(res=>console.log(res))
  // }, [])  