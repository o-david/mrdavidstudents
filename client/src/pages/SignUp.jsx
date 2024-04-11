import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input';

const SignUp = () => {
    const [email, setEmail] = useState("");
    return (
      <div className="flex justify-center items-center h-screen text-[0.875rem] bg-sec w-full">
        <div className="w-[30%] flex text-sec3 flex-col items-center gap-10 bg-pry py-8 rounded-lg">
          <h3 className="text-[2rem]">BECOME A STUDENT</h3>
          <form className="w-3/5 flex flex-col gap-10 ">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
           <div className="flex flex-col gap-4 items-center">
  
            <button className="border border-sec3 rounded-lg py-2 transition-all hover:bg-sec3 hover:text-white w-full">Get Started</button>
            <div className="h-[1px] w-4/5 bg-sec3"></div>
            
                <div className="flex rounded-lg border hover:text-white hover:bg-sec3 border-sec3 py-2 items-center justify-center w-full">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      d="M22.3055 10.5415H21.5V10.5H12.5V14.5H18.1515C17.327 16.8285 15.1115 18.5 12.5 18.5C9.1865 18.5 6.5 15.8135 6.5 12.5C6.5 9.1865 9.1865 6.5 12.5 6.5C14.0295 6.5 15.421 7.077 16.4805 8.0195L19.309 5.191C17.523 3.5265 15.134 2.5 12.5 2.5C6.9775 2.5 2.5 6.9775 2.5 12.5C2.5 18.0225 6.9775 22.5 12.5 22.5C18.0225 22.5 22.5 18.0225 22.5 12.5C22.5 11.8295 22.431 11.175 22.3055 10.5415Z"
                      fill="#FFC107"
                      />
                    <path
                      d="M3.65308 7.8455L6.93858 10.255C7.82758 8.054 9.98058 6.5 12.5001 6.5C14.0296 6.5 15.4211 7.077 16.4806 8.0195L19.3091 5.191C17.5231 3.5265 15.1341 2.5 12.5001 2.5C8.65908 2.5 5.32808 4.6685 3.65308 7.8455Z"
                      fill="#FF3D00"
                      />
                    <path
                      d="M12.4999 22.5C15.0829 22.5 17.4299 21.5115 19.2044 19.904L16.1094 17.285C15.0717 18.0742 13.8036 18.501 12.4999 18.5C9.89891 18.5 7.69041 16.8415 6.85841 14.527L3.59741 17.0395C5.25241 20.278 8.61341 22.5 12.4999 22.5Z"
                      fill="#4CAF50"
                      />
                    <path
                      d="M22.3055 10.5415H21.5V10.5H12.5V14.5H18.1515C17.7571 15.6082 17.0467 16.5766 16.108 17.2855L16.1095 17.2845L19.2045 19.9035C18.9855 20.1025 22.5 17.5 22.5 12.5C22.5 11.8295 22.431 11.175 22.3055 10.5415Z"
                      fill="#1976D2"
                      />
                  </svg>
  
                  <button>Get Started with Google</button>
                </div>
                      </div>
            <p className="text-center">
              Already have an account? <Link to={'/login'} className="hover:underline">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
}

export default SignUp