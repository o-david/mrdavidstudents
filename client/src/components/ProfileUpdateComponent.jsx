import React, { useState } from 'react'
import Tooltip from './Tooltip'

const ProfileUpdateComponent = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const togglePopUp = () => setShowPopUp(!showPopUp);

  return (
//     <div class="flex justify-center py-8">

//   <div class="container mx-auto px-4">
   
//     <div class="flex flex-col md:flex-row gap-6">

//       <div class="md:w-[55%] bg-[#E8B4B8] p-6 rounded-lg shadow-md">
//         <h2 class="text-xl font-semibold mb-4">Personal Details</h2>
//         <form >
//           <div class="flex flex-col md:flex-row gap-4">
//             <div class="w-full">
//               <label for="first_name" class="block text-sm font-medium text-gray-700">First Name</label>
//               <input type="text" id="first_name" name="first_name" class="mt-1 block w-full  border-b-2  border-[#67595E] border-b-2-b-2 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="John"/>
//             </div>
//             <div class="w-full">
//               <label for="last_name" class="block text-sm font-medium text-gray-700">Last Name</label>
//               <input type="text" id="last_name" name="last_name" class="mt-1 block w-full  border-b-2   border-[#67595E] shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="Doe"/>
//             </div>
//           </div>

//           <div class="mt-5">
//             <label for="location" class="block text-sm font-medium text-gray-700">Country/State</label>
//             <input type="text" id="email" name="email" class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="johndoe@example.com"/>
//           </div>

//           <div class="mt-5">
//             <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input type="tel" id="phone" name="phone" class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="+1234567890"/>
//           </div>
//           <div class="mt-5">
//             <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input type="tel" id="phone" name="phone" class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="+1234567890"/>
//           </div>
//           <div class="mt-5">
//             <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input type="tel" id="phone" name="phone" class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="+1234567890"/>
//           </div>
//           <div class="mt-5">
//             <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input type="tel" id="phone" name="phone" class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="+1234567890"/>
//           </div>

//           <div class="mt-6">
//             <button type="submit" class="w-full px-4 py-2 border-[1px] border-[#67595E] bg-inherit text-[#67595E] hover:text-white rounded-md hover:bg-[#67595E]">Save Personal Details</button>
//           </div>
//         </form>
//       </div>

   
//       <div class="md:w-[45%] space-y-6">
 
//         <div class="bg-[#E8B4B8] p-6 rounded-lg shadow-md">
//           <h2 class="text-xl font-semibold mb-4">Education</h2>
//           <form action="#" method="POST">
//             <div>
//               <label for="degree" class="block text-sm font-medium text-gray-700">Highest Degree</label>
//               <input type="text" id="degree" name="degree" class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="Bachelor's"/>
//             </div>

//             <div class="mt-4">
//               <label for="university" class="block text-sm font-medium text-gray-700">University</label>
//               <input type="text" id="university" name="university" class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="Harvard University"/>
//             </div>

//             <div class="mt-6">
//               <button type="submit" class="w-full px-4 py-2 border-[1px] border-[#67595E] bg-inherit text-[#67595E] hover:text-white rounded-md hover:bg-[#67595E]">Save Education</button>
//             </div>
//           </form>
//         </div>


//         <div class="bg-[#E8B4B8] p-6 rounded-lg shadow-md">
//           <h2 class="text-xl font-semibold mb-4">Experience</h2>
//           <form >
//             <div>
//               <label for="job_title" class="block text-sm font-medium text-gray-700">Job Title</label>
//               <input type="text" id="job_title" name="job_title" class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="Software Developer"/>
//             </div>

//             <div class="mt-4">
//               <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
//               <input type="text" id="company" name="company" class="mt-1 block w-full  border-b-2   border-[#67595E]  shadow-sm focus:ring-indigo-500 focus: border-b-2-indigo-500 sm:text-sm px-4 py-2 outline-none bg-inherit" placeholder="Google Inc."/>
//             </div>

//             <div class="mt-6">
//               <button type="submit" class="w-full px-4 py-2 border-[1px] border-[#67595E] bg-inherit text-[#67595E] hover:text-white rounded-md hover:bg-[#67595E]">Save Experience</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>

// </div>
<div>
<div
        onClick={togglePopUp}
        className="fixed opacity-40 hover:opacity-100 bottom-20 right-8 z-10"
      >
        <Tooltip text={"Edit Profile"}>
        <svg className='w-6 fill-white ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"></path> </g></svg>
        </Tooltip>
      </div>

</div>
  )
}

export default ProfileUpdateComponent