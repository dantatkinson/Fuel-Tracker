import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import myfuel from '../../assets/myfuel.png';
import './LogIn.scss';

type loginUserProps = {
  credentials: object;
}

async function loginUser({ credentials }: loginUserProps): Promise<any> {
  return fetch('http://localhost:8080/log-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json());
}

export default function LogIn({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-wrapper">
      <header>
        <img src={myfuel} className="logo" alt="MyFuel" />
      </header>
      <nav className="nav">
        <Link to="/sign-up" className="nav-link">Sign Up</Link>
      </nav>
      <h2>Please Log In</h2>
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

LogIn.propTypes = {
  setToken: propTypes.func.isRequired,
};
