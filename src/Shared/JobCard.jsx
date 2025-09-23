import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const { title, location, requirements, salaryRange, _id, description, company, company_logo } = job;

  return (
    <div className="card bg-white w-full max-w-lg mx-auto shadow-lg border border-blue-300 hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b">
        <img
          className="w-16 h-16 object-contain rounded-md border p-1"
          src={company_logo}
          alt={`${company} logo`}
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{company}</h2>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            <FaMapMarkerAlt className="text-blue-500" /> {location}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="card-body px-5 py-4 space-y-3">
        <h3 className="card-title text-lg font-semibold text-gray-900">
          {title}
          <span className="badge badge-secondary ml-2">NEW</span>
        </h3>

        <p className="text-sm text-gray-700 font-medium">
           <span className="font-bold">Salary:</span> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>

        <p className="text-gray-600 text-sm line-clamp-3">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-2">
          {requirements.map((skill, index) => (
            <span
              key={index}
              className="badge badge-outline px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
