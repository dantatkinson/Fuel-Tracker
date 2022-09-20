import React from 'react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

export default function AuthenticationButton({ isAuthenticated }) {
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
}
