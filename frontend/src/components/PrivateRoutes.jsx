import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {

    const studentToken = sessionStorage.getItem('studentToken');
    const adminToken = sessionStorage.getItem('adminToken');

  return (
    <div>
       {studentToken ? <Outlet /> : <Navigate to="/s" />}
       {adminToken ? <Outlet /> : <Navigate to="/addash" />}
    </div>
  )
}

export default PrivateRoutes