import React from 'react';

export default function Home({ isAuthenticated, user }) {
  return (
    <h3>Welcome {isAuthenticated ? user.name : 'to MyFuel'}</h3>
  );
}
