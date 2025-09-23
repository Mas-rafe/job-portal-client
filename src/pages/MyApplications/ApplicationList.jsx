import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div className="p-4">
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Jobs Applied so far: {applications.length}
      </h3>

      {/* ✅ Desktop & Tablet (Table view) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                application={application}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile (Card view) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {applications.map((application, index) => (
          <div
            key={application._id}
            className="border rounded-lg shadow-sm p-4 bg-white"
          >
            <p className="font-bold text-lg">
              {index + 1}. {application.name}
            </p>
            <p className="text-gray-600">Job: {application.jobTitle}</p>
            <p className="text-gray-500">Status: {application.status}</p>
            <div className="mt-2">
              {/* Action buttons (like view/delete) */}
              <button className="btn btn-sm btn-primary">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
