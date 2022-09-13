import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.scss';
import myfuel from '../../assets/myfuel.png';
import FuelInput from '../FuelInput';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import Home from '../Home.tsx';
import useToken from './useToken.tsx';

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <LogIn setToken={setToken} />;
  }

  const logOut = () => {
    setToken('');
  };

  return (
    <div className="wrapper">
      <header className="header">
        <img src={myfuel} className="logo" alt="MyFuel" />
      </header>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link" onClick={logOut}>Log Out</Link>
        {/* <Link to="/log-in" className="nav-link">Log In</Link> */}
        <Link to="/sign-up" className="nav-link">Sign Up</Link>
      </nav>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="log-in" element={<LogIn />}/> */}
        <Route path="sign-up" element={<SignUp />}/>
        {/* <Route path="fill-up" element={<FuelInput />}/> */}
      </Routes>
    </div>
  );
}
