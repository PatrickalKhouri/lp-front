import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const isLoggedIn = sessionStorage.getItem('token') !== null;

    if (isLoggedIn) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return AuthenticatedComponent;
};

export default withAuth;
