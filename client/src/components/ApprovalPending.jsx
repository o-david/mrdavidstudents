import React from 'react'
import { pending } from '../assets'
import { Link } from 'react-router-dom'

const ApprovalPending = () => {
  return (
    <div className='w-screen h-screen absolute flex justify-center bg-[rgba(0,0,0,0.3)] items-center'>

    <div className="w-2/5 p-6 bg-sec rounded ">
    <div className=" flex flex-col gap-6 items-center">
        <img
          src={pending}
          className="border lg:p-[0.875rem] p-[0.625rem] rounded-xl border-[#FEF0C7] bg-[#FFFCF5]"
          alt=""
        />
        <h1 className=" font-semibold lg:text-[1.875rem] text-[1.25rem] text-center"> Approval Pending</h1>
          <p className="text-[0.875rem] lg:text-[1rem] text-center text-[#475467]">
          You will gain full access to dashboard upon successful approval.
          </p>
          <Link to={'/'} className="border text-white text-[1rem] font-semibold rounded-lg bg-pry hover:bg-sec3 hover:text-white text-center py-[0.625rem] w-full">
          Go to HomePage
          </Link>
        </div>
      </div>
          </div>
  )
}

export default ApprovalPending