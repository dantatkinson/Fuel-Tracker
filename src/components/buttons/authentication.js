import React from 'react';
import Login from './Login';
import Logout from './Logout';

export default function Authentication({ isAuthenticated }) {
  return isAuthenticated ? <Logout /> : <Login />;
}
