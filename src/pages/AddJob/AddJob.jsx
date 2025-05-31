import React from 'react';
import UseAuth from '../../Hooks/UseAuth';

const AddJob = () => {
    const { user } = UseAuth();
    const handleAddAJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        //process salary range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        //process requirements
        const requirementsString = newJob.requirements;
        const newRequirements = requirementsString.split(',')
        const requirementsClean = newRequirements.map(req => req.trim());
        newJob.requirements = requirementsClean;

        //process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())
        console.log(newJob);
    }
    return (
        <div>
            <h2>please add a job</h2>
            <form onSubmit={handleAddAJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" className="input" name='title' placeholder="Job title" />

                    <label className="label">Company</label>
                    <input type="text" className="input" name='company' placeholder="Company name" />

                    <label className="label">Location</label>
                    <input type="text" className="input" name='location' placeholder="Location of the company" />

                    <label className="label">Company logo</label>
                    <input type="text" className="input" name='company_logo' placeholder="Company logo url" />

                </fieldset>
                {/* Job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" aria-label="Onsite" value="onsite" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" value="remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="hybrid" />
                    </div>

                </fieldset>
                {/*Job Category*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select defaultValue="Job Category" name='category' className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>

                </fieldset>
                {/* Application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>

                    <input type="date" name='deadline' className="input" />

                </fieldset>
                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend"> Salary Range</legend>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                            <div>
                                <label className="label">Maximum Salary</label>
                                <input type="text" className="input" name='min' placeholder="Maximum Salary" />
                            </div>

                            <div>
                                <label className="label">Minimum Salary</label>
                                <input type="text" className="input" name='max' placeholder="Minimum Salary" />
                            </div>

                            <div>
                                <label className="label">Currency</label>
                                <select defaultValue="Select a currency" name='currency' className="select">
                                    <option disabled={true}>Select a currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>EU</option>
                                </select>
                            </div>
                        </div>

                    </fieldset>

                </fieldset>

                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description </legend>

                    <textarea className='textarea' name="description" placeholder='Job Description' ></textarea>

                </fieldset>

                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirements </legend>

                    <textarea className='textarea' name="requirements" placeholder='Job Requirements(separate by comma)' ></textarea>

                </fieldset>
                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibilities </legend>

                    <textarea className='textarea' name="responsibilities" placeholder='Job Responsibilities(separate by comma)' ></textarea>

                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" className="input" name='hr_name' placeholder="HR Name" />

                    <label className="label">HR Email </label>
                    <input type="email" className="input" name='hr_email' defaultValue={user.email} placeholder="HR Email" />
                </fieldset>

                <input type="submit" className='btn' value="Add Job" />
            </form>
        </div>
    );
};

export default AddJob;