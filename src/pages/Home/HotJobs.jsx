import React, { useEffect, useState } from "react";
import JobCard from "../../Shared/JobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(jobs.length / itemsPerPage);

    useEffect(() => {
        fetch("https://career-code-server-tawny.vercel.app/jobs")
            .then((res) => res.json())
            .then((data) => {
                console.log("API Response Data:", data);
                setJobs(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching jobs:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading jobs...</p>;

    return (
        <div className="space-y-4">
            <h2 className="text-4xl text-center my-6 font-semibold" >Hot <span className="text-blue-700 font-bold">Jobs</span> of the Day</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                {
                    currentJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)

                }
            </div>
            {/* Pagination */}
            <div className="flex justify-center gap-2 my-6">
                {/* Previous Button */}
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                    Prev
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 rounded ${currentPage === i + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>

    );
};

export default HotJobs;
