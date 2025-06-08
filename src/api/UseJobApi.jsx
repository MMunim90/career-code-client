import React from 'react';
import UseAxiusSecure from '../hooks/UseAxiusSecure';

const UseJobApi = () => {
    const axiosSecure = UseAxiusSecure()

    const jobsCreatedByPromise = email => {
        return axiosSecure.get(`jobs/applications?email=${email}`).then(res => res.data);
    }
    return {
        jobsCreatedByPromise
    };
};

export default UseJobApi;