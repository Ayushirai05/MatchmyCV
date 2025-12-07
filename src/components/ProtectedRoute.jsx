import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if user is "logged in" (we will simulate this by checking localStorage)
  const isAuthenticated = localStorage.getItem('userToken');

  if (!isAuthenticated) {
    // If not logged in, kick them to the login page
    return <Navigate to="/login" replace />;
  }

  // If logged in, show the actual page
  return children;
};

export default ProtectedRoute;