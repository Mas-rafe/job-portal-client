import React, { Children, use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = () => {
    const {user , loading} = use(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(!user){
       return <Navigate  to="/signIn" state={location.pathname}></Navigate>
    }
    return Children;
};

export default PrivateRoute;