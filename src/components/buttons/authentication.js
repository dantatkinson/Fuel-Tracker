import React from 'react';
import LoginButton from './login';
import LogoutButton from './logout';

export default function AuthenticationButton({ isAuthenticated }) {
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
}
