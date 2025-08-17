import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id,title,company} = useLoaderData();
  
    return (
        <div className="flex justify-center my-6">
      <div className="card w-full max-w-md bg-gradient-to-r from-blue-300 to-blue-600 text-white shadow-xl rounded-2xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="text-lg mt-2  ">🚀 <span className='font-bold text-blue-900'>Company: </span><span className="font-semibold">{company}</span></p>

          <div className="divider border-blue-300 my-4"></div>

          <Link to={`/jobApply/${_id}`}>
            <button className="btn bg-white text-blue-600 font-bold px-6 rounded-lg shadow-md hover:bg-blue-100 transition-all">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default JobDetails;