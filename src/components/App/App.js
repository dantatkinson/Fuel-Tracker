import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import myfuel from '../../assets/myfuel.png';
import FuelInput from '../FuelInput';
import Home from '../Home';
import AuthenticationButton from '../buttons/authentication-button';

import './App.scss';

export default function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={myfuel} className="logo" alt="MyFuel" />
      </header>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <AuthenticationButton />
      </nav>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="fill-up" element={<FuelInput />}/>
      </Routes>
    </div>
  );
}
