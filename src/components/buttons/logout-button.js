import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './log-in-out-button.scss';

export default function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <a className="link"
      onClick={() => logout({
        returnTo: window.location.origin,
      })
      }
    >Log Out</a>
  );
}
