import  { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import './App.css';
import { useState } from 'react';

function setToken(userToken) {
  sessionStorage.setItem('token', userToken);
}

function getToken() {
}

function App() {
  const token = getToken()

  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
       </Routes>
    </div>
  );
}

export default App;
