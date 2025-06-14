import React, { useContext } from 'react';
import { Authcontext } from './../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivetRouter = ({ children }) => {

    const { user, loading } = useContext(Authcontext)

    if (loading) return <div className='flex justify-center items-center my-10'>  <span className="loading loading-spinner text-cyan-900"></span></div>

    if (user) return children

    return (
        <div>
            <Navigate to={'/login'} ></Navigate>
        </div>
    );
};

export default PrivetRouter;