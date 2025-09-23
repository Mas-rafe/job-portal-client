import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../Hooks/UseAuth';
import { myApplicationsPromise } from '../../api/ApplicationsApi';


const MyApplications = () => {
     
    const {user} = UseAuth();///

    return (
        <div>
           <div className=" max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 lg:w-7xl ">
  <ApplicationStats />
</div>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList> 
            </Suspense>
        </div>
    );
};

export default MyApplications;