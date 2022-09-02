import React, { useState } from 'react';
import myfuel from '../assets/myfuel.png';
import './App.scss';
import { Route, Routes, Link } from 'react-router-dom';
import FuelInput from './FuelInput';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';

function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <LogIn setToken={setToken} />
  // }

  return (
    <div className="wrapper">
      <header className="header">
        <img src={myfuel} className="logo" alt="MyFuel" />
      </header>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/log-in" className="nav-link">Log In</Link>
        <Link to="/sign-up" className="nav-link">Sign Up</Link>
      </nav>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="log-in" element={<LogIn />}/>
        <Route path="sign-up" element={<SignUp />}/>
        <Route path="fill-up" element={<FuelInput />}/>
      </Routes>
    </div>
  );
}

export default App;
