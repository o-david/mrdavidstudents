import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    console.log(email, password)

    fetch("http://localhost:4000/login",{
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => res.json())
    .then(res=> console.log(res))
    .catch(err => console.log(err))
    }

  return (
   <>
   <div className='flex w-screen h-screen justify-center items-center'>
    <div className='border p-10 rounded-lg'>
      <p className='text-[3rem]'>Login</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <input type='text' className='border rounded-md p-2' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' className='border rounded-md p-2' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='hover:bg-blue-500 border hover:text-white rounded-md p-2'>Login</button>
      </form>

    </div>
   </div>
   </>
  )
}

export default App






  // useEffect(() =>{
  //   fetch("http://localhost:4000/countries")
  //   .then(res =>res.json())
  //   .then(res=>console.log(res))
  // }, [])  