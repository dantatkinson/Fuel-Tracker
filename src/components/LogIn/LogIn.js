import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LogIn.scss';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/log-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function LogIn({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email Address</p>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <div className="submit">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

LogIn.PropTypes = {
  setToken: PropTypes.func.isRequired
}
