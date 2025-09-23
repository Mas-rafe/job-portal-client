import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { _id, title, company, location, description } = useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="card w-full max-w-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="card-body p-6 md:p-10 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
          <p className="text-lg">
            <span className="font-semibold">🏢 Company: </span>
            {company}
          </p>
          {location && (
            <p className="text-base opacity-90">📍 {location}</p>
          )}

          {/* Divider */}
          <div className="divider before:bg-white/50 after:bg-white/50"></div>

          {/* Description */}
          {description && (
            <p className="text-base leading-relaxed text-white/90">
              {description}
            </p>
          )}

     
          <div className="mt-6">
            <Link to={`/jobApply/${_id}`}>
              <button className="btn bg-white text-blue-600 font-bold px-8 py-2 rounded-lg shadow-md hover:bg-blue-100 hover:scale-105 transition-transform duration-200">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
