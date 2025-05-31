import React, { useEffect, useState } from "react";
import JobCard from "../../Shared/JobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
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
            <h2 className="text-4xl text-center" >Hot Jobs of the Day</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)

                }
            </div>
        </div>
    );
};

export default HotJobs;
