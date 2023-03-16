import React from 'react';
import withAuth from './withAuth.js';

const ProtectedPage = () => {
console.log('Rendering ProtectedPage');
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page can only be accessed by logged-in users.</p>
    </div>
  );
};

export default withAuth(ProtectedPage);