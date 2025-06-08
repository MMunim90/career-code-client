import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import UseApplicationApi from '../../api/UseApplicationApi';

const MyApplications = () => {

    const { user } = useAuth();
    const {myApplicationsPromise} = UseApplicationApi();
    // console.log('Token in the context',user.accessToken)

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading your applications'}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;