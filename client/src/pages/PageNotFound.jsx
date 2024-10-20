import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PageNotFound = ({message, home}) => {
const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! You've hit a glitch in the matrix.</h1>
      <p className="text-lg text-gray-600 mb-6"> {message
        ?message:
      "Either this page is still in the workshop or you've found a broken route. Try hitting 'refresh' or retracing your steps."
        }
      </p>
      <button 
        onClick={() => home?navigate('/'):navigate(-1)} // Go back one step in history
        className="bg-pry text-sec3 px-4 py-2 rounded hover:bg-sec3 hover:text-white transition duration-300"
      >
        {home?"Homepage":"Retrace your steps"}
      </button>
    </div>
  );
}

export default PageNotFound;