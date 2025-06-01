import React, { Suspense } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {
    const {user} = UseAuth();
    return (
        <div>
            <h2>my posted jobs</h2>
            <Suspense>
                <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)} ></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;