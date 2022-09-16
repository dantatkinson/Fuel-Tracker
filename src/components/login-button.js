import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './login-button.scss';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <a className="link"
      onClick={() => loginWithRedirect()}
    >Log In</a>
  );
}
