import React from 'react';
import { Link, useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = UseAuth();

    const handleApplyFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            github,
            resume
        };

        axios.post('https://career-code-server-tawny.vercel.app/applications', application)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4">
            <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
                    Apply for Job :{" "}
                    <Link to={`/jobs/${jobId}`} className="text-blue-600 hover:underline">
                        View Details
                    </Link>
                </h3>

                <form onSubmit={handleApplyFormSubmit} className="space-y-5">
                    {/* LinkedIn */}
                    <div>
                        <label className="label text-sm font-medium">LinkedIn Profile</label>
                        <input
                            type="url"
                            name="linkedIn"
                            required
                            className="input input-bordered w-full focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your LinkedIn profile link"
                        />
                    </div>

                    {/* GitHub */}
                    <div>
                        <label className="label text-sm font-medium">GitHub Profile</label>
                        <input
                            type="url"
                            name="github"
                            required
                            className="input input-bordered w-full focus:ring-2 focus:ring-purple-400"
                            placeholder="Enter your GitHub profile link"
                        />
                    </div>

                    {/* Resume */}
                    <div>
                        <label className="label text-sm font-medium">Resume Link</label>
                        <input
                            type="url"
                            name="resume"
                            required
                            className="input input-bordered w-full focus:ring-2 focus:ring-green-400"
                            placeholder="Enter your Resume (Google Drive/Portfolio)"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full text-white text-lg rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;
