import axios from 'axios';
import { useState } from 'react';

import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 2;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentApplications = applications.slice(indexOfFirstItem, indexOfLastItem);

    const handleStatusChange = (e, app_id) => {
        console.log(e.target.value, app_id);

        axios.patch(`https://career-code-server-tawny.vercel.app/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This Job has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <h2 className="text-3xl text-center my-4"><span className='font-bold'>0{applications.length}</span> Applications for: <span className='text-blue-500'>{job_id}</span> </h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                        currentApplications.map((application, index) =>
                                <tr key={application._id}>
                                    {/* <th>{index + 1}</th> */}
                                    <th>{(currentPage - 1) * itemsPerPage + index + 1}</th>
                                    <td><span className='font-semibold'>{application.applicant}</span></td>
                                    <td>Quality Control Specialist</td>
                                    <td>
                                        <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application.status} className="select border-blue-500">
                                            <option disabled={true}>Update User </option>
                                            <option>Pending</option>
                                            <option>Interview</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className="flex gap-2 mx-auto justify-center my-4">
                {Array.from({ length: Math.ceil(applications.length / itemsPerPage) }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default ViewApplications;